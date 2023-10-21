export const treasury = {
    from: {
        price: 100000,
        date: "Feb 09, 2021",
    },
    to: {
        price: 2779120,
        date: "Sep 31, 2023",
    },
};

export const twitterFeedsIds = [
    "1706813790468071823",
    "1710069164130365895",
    "1709690305941754008",
];

export async function getData(route) {
    return await fetch(`${process.env.BASE_URL}api/${route}`)
        .then((respose) => respose.json())
        .then((data) => data.data);
}
