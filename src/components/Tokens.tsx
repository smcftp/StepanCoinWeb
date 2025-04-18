import WalletCard from "./WalletCard";

export default function Tokens() {
  return (
    <section className="px-6 py-[58px] xs:p-[58px] lg:px-[116px] flex flex-col gap-6">
      <h2 className="text-[36px] xs:text-[48px] lg:text-[64px] leading-[48px] xs:leading-[64px] lg:leading-[85px]">Распределение токенов</h2>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex flex-col gap-6 flex-auto min-w-0">
          <WalletCard
            role="Создатель"
            wallet="UQDLVr7uvcJbPls95JtXmgNSk9GhNEiyddjxWEAvgbPNcoMG"
            amount={1000}
            inverted
          />
          <WalletCard role="Выплаты сообществу"
            wallet="UQCWHSW7QoNTV6XaZ-1JZD51gtMFa1qWmo5C7Ee6mBtWGE74"
            amount={1000}
          />
        </div>
        <div className="flex flex-col gap-6 flex-auto min-w-0">
          <WalletCard 
            role="Будущий стейкинг"
            wallet="UQBdKgNurYk652MbDVdcltYxZd4uhyOTHodzKn6UpWOyhzFF"
            amount={1000}  
          />
          <WalletCard role="Заблокированные токены"
            wallet="UQDLvLoz8kLxtO1VkV96E9MSMYzB7T4l1NML19iQXxX_Fg-1"
            amount={1000}
            inverted
          />
        </div>
      </div>
    </section>
  )
}