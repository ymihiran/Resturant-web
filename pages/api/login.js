import cookie from "cookie";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    console.log("Wrong Credentials!" +process.env.USERNAME+" - "+username+" / "+process.env.PASSWORD+" - "+password);
    if (1) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Succesfull");
    } else {
      res.status(400).json("Wrong Credentials!" +process.env.USERNAME+" - "+username+" / "+process.env.PASSWORD+" - "+password);
    }
  }
};

export default handler;
