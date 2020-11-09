interface TechObject {
    title: string,
    experience: number;
}

interface CreateUserData {
    name?: string,
    email: string,
    password: string,
    techs: Array<String | TechObject>

}

export default function createUser({name, email, password, techs}: CreateUserData){
    const data = {
        name,
        email,
        password,
        techs
    }

    return data;
}