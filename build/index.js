"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let srcm = require('source-map-support');
srcm.install();
const express_1 = __importDefault(require("express"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const port = 3000;
    let students = [
        { name: 'douglas', ci: '1234' },
        { name: 'miguel', ci: '34344' },
        { name: 'jorge', ci: '6634' }
    ];
    const printReq = (req, res, next) => {
        console.log(req);
        next();
    };
    app.use(printReq);
    app.get('/students', (req, res) => {
        if (req.headers.accept == 'application/json') {
            res.json(students);
        }
        res.send('students!!');
    });
    app.get('/students/:id', (req, res) => {
        let id = Number(req.params.id);
        console.log(id);
        res.json(students[id]);
    });
    app.post('/students', (req, res) => {
    });
    app.listen(port, () => {
        console.log('app listen in: http://localhost:' + port);
    });
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN6QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFFZixzREFBNkI7QUFFN0IsQ0FBQyxHQUFTLEVBQUU7SUFDWCxNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUE7SUFDckIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBRWpCLElBQUksUUFBUSxHQUFHO1FBQ2QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7UUFDL0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7UUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7S0FDN0IsQ0FBQTtJQUVELE1BQU0sUUFBUSxHQUNiLENBQUMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFBRSxFQUFFO1FBRzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxFQUFFLENBQUE7SUFDUCxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRWpCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLElBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksa0JBQWtCLEVBQUU7WUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUNsQjtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNyQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN2QixDQUFDLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBRW5DLENBQUMsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxDQUFDLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUEifQ==