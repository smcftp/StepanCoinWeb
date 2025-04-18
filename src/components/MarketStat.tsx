'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import Image from 'next/image';

// Константные значения для случая ошибки
const FALLBACK_VALUES = {
  marketCap: 1000000,    // 1M
  volume: 500000,        // 500K
  transactions: 1000,    // 1K транзакций
  liquidity: 2000000     // 2M
};

export default function MarketStat() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const apiService = axios.create({
    baseURL: "https://api.dexscreener.com"
  });

  async function fetchData() {
    try {
      const response = await apiService.get('/token-pairs/v1/ton/EQBzDYQE6nBlwIMgERlwbPkzb9fBXXPey1gkjxPC6LKSDITU');
      setData(response.data?.pairs || null);
      setError(false);
    } catch (error: any) {
      console.error("API Error:", error);
      setError(true);
    }
  }

  function shortenNumber(number: number) {
    if (!number) return 0;
    const divided = number / 1000;
    const rounded = divided.toFixed(1);
    return parseFloat(rounded);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Получаем данные или константные значения
  const displayData = error || !data || !data[0] ? FALLBACK_VALUES : {
    marketCap: data[0]?.marketCap || FALLBACK_VALUES.marketCap,
    volume: data[0]?.volume?.h24 || FALLBACK_VALUES.volume,
    transactions: (data[0]?.txns?.h24?.buys || 0) + (data[0]?.txns?.h24?.sells || 0) || FALLBACK_VALUES.transactions,
    liquidity: data[0]?.liquidity?.usd || FALLBACK_VALUES.liquidity
  };

  return (
    <section className="p-6 xs:px-[58px] lg:py-[58px] lg:px-[116px] relative">
      <div className="bg-mcap w-full bg-cover bg-no-repeat aspect-39/25 flex justify-between
        p-6 pb-8 xs:p-10 xs:pb-16 sm:px-[56px] sm:pt-[41px] sm:pb-[76px] md:px-[92px] md:pt-[58px] md:pb-[90px]
        lg:px-[84px] lg:pt-[58px] lg:pb-[100px] xl:pl-[104px] xl:pt-[50px] xl:pr-[40px] xl:pb-[90px]">
        <div className="flex flex-col">
          <p className="text-[6px] xs:text-[13px] md:text-[18px] xl:text-[24px]
            leading-[8px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px]">
            Рыночная капитализация</p>
          <p className="font-bold text-2xl xs:text-[50px] md:text-[72px] xl:text-[96px]
            leading-[34px] xs:leading-[67px] md:leading-[96px] xl:leading-[128px]">
            ${shortenNumber(displayData.marketCap)}K</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-5 md:gap-[30px] xl:gap-10 sm:items-end h-full justify-between">
          <div className="flex flex-col items-start">
            <p className="text-[9px] xs:text-[13px] md:text-[18px] xl:text-[24px] 
              leading-[13px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px] whitespace-nowrap">Объём торгов (24ч)</p>
            <p className="font-semibold text-[19px] xs:text-[25px] md:text-[36px] xl:text-[24px]
              leading-[25px] xs:leading-[34px] md:leading-[48px] xl:leading-[64px]">
              ${displayData.volume}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[9px] xs:text-[13px] md:text-[18px] xl:text-[24px]
              leading-[13px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px] whitespace-nowrap">
              Транзакции (24ч)</p>
            <p className="font-semibold text-[19px] xs:text-[25px] md:text-[36px] xl:text-[24px]
              leading-[25px] xs:leading-[34px] md:leading-[48px] xl:leading-[64px]">
              {displayData.transactions}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[9px] xs:text-[13px] md:text-[18px] xl:text-[24px]
              leading-[13px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px] whitespace-nowrap">
              Ликвидность</p>
            <p className="font-semibold text-[19px] xs:text-[25px] md:text-[36px] xl:text-[24px]
              leading-[25px] xs:leading-[34px] md:leading-[48px] xl:leading-[64px]">
              ${displayData.liquidity}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-3 xs:left-[29px] lg:left-[58px] z-10">
        <Image
          src="/Rectangle.svg"
          alt="Icon"
          width={1000}
          height={1000}
          className="w-[120px] h-[120px] xs:w-[170px] xs:h-[170px] sm:w-[220px] sm:h-[220px] md:w-[270px] md:h-[270px] lg:w-[320px] lg:h-[320px] xl:w-[370px] xl:h-[370px]"
        />
      </div>
    </section>
  );
}