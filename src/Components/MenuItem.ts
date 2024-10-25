export type MenuItem = {
    Type: "ActionLink";
    Name: string;
    Action: () => void;
} | {
    Type: "Link";
    Name: string;
    Url: string;
}| {
    Type: "HashLink",
    Name: string,
    Hash: string
}
