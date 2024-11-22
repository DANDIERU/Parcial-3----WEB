import { Poem } from "../types/poems";

export const getPoemsAPI = async () => {
  try {
    const response = await fetch("https://poetrydb.org/poemcount/20");
    const responseJSON: Array<Poem> = await response.json()
    return responseJSON
  } catch (error) {
    console.log(error);
  }
};











/*type ReturnGetPoems = any;
export const getPoems = async (): ReturnGetPoems => {
  return [
    {
      title: "Epitaph. Intended for Sir Isaac Newton, in Westminster Abbey.",
      author: "Alexander Pope",
      lines: [
        "    ISAACUS NEWTONUS:",
        "    QUEM IMMORTALEM",
        "TESTANTUR TEMPUS, NATURA, COELUM:",
        "      MORTALEM",
        "    HOC MARMOR FATETUR.",
        "",
        "Nature and Nature's laws lay hid in night",
        "God said, Let Newton be! and all was light.",
      ],
      linecount: "7",
    },
  ];
};*/