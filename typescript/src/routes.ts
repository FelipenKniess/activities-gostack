import {Request, Response} from 'express';
import CreateUser  from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = CreateUser({
        email: 'Felipe.nkniess@gmail.com',
        password: '312312312',
        techs: [
            'NOde',
            'React',
            'React native',
            { title: 'Js', experience: 100}
        ]
    });

    return response.json(user);
}