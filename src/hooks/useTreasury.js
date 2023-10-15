// import { treasury } from "@/data ";

export function useTreasury(treasury) {
    // console.log(treasury);
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    const treasuryFromPrice = formatter.format(treasury?.from?.price);
    const treasuryFromDate = treasury?.from?.date;
    const treasuryToPrice = formatter.format(treasury?.to?.price);
    const treasuryToDate = treasury?.to?.date;
    const diffrence = treasury?.to?.price - treasury?.from?.price;
    const treasuryDiffrence = `${diffrence < 0 ? "-" : "+"}${formatter.format(
        treasury?.to?.price - treasury?.from?.price
    )}`;
    const treasuryPercentage = `${
        (treasury?.from?.price / treasury?.to?.price) * 100
    }%`;
    return {
        treasuryFromPrice,
        treasuryFromDate,
        treasuryToPrice,
        treasuryToDate,
        treasuryDiffrence,
        treasuryPercentage,
    };
}
