const PORT = process.env.PORT || 8080;
const Application = require("./framework/Application");
const router = require("./src/user-router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");

const mongoose = require("mongoose");

const app = new Application();

app.addRouter(router);
app.use(jsonParser);
app.use(parseUrl("http://localhost:8080"));

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yankvasya:123123123@cluster0.rtge4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
