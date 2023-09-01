import * as readline from "readline";
import Server from "./server/Server";
import CheckUserMiddleware from "./middleware/CheckUserMiddleware";
import CheckPermissionMiddlware from "./middleware/CheckPermissionMiddleware";

declare var process;
const server = new Server();

function setPromptQuestions(){
    const rl = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    rl.question('Digite seu email: ', (email) => {
        rl.question('Digite sua senha: ', (password) => {
            server.logIn(email, password);
            rl.close();
        });
    });

    rl.on("close", () => setPromptQuestions());
    
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddlware());
server.setMiddleware(middleware);
setPromptQuestions();