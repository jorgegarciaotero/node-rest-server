import express from 'express';
import path from 'path';

interface Options{
    port : number;
    public_path? : string;
}

export class Server {
    //Start our server
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;

    constructor(options:Options){
        const {port,public_path='public'} = options;
        this.port = port;
        this.publicPath = public_path;

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));

        if(this.publicPath){
            this.app.use(express.static(this.publicPath));
        }
    }


    async start(){
        //Middlewares

        //Public Folder
        this.app.use(express.static(this.publicPath));
        this.app.get('*',(req,res)=>{
            const indexPath = path.join(__dirname,`../../${this.publicPath}`,'index.html');
            res.sendFile(indexPath);
            return;
        })

        //Routes

        //Global Error Handler
        

        this.app.listen(this.port,()=>{
            console.log(`server running on port ${3000}`);
        });


    }
 }