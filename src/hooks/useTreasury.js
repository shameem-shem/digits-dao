// import { treasury } from "@/data ";

export function useTreasury(treasury) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    const fromPrice = +treasury?.from?.price;
    const toPrice = +treasury?.to?.price;
    const treasuryFromPrice = formatter.format(fromPrice);
    const treasuryFromDate = treasury?.from?.date;
    const treasuryToPrice = formatter.format(toPrice);
    const treasuryToDate = treasury?.to?.date;
    const diffrence = toPrice - fromPrice;
    const treasuryDiffrence = `${diffrence < 0 ? "-" : "+"}${formatter.format(
        toPrice - fromPrice
    )}`;
    const treasuryPercentage = `${(fromPrice / toPrice) * 100}%`;
    return {
        treasuryFromPrice,
        treasuryFromDate,
        treasuryToPrice,
        treasuryToDate,
        treasuryDiffrence,
        treasuryPercentage,
    };
}
