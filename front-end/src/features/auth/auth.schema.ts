type UserProps = {
  id: string;
  name: string;
  email: string;
};

type UserPropsResponse = {
    id:string;
    name: string;
    email: string;
    token: string;
}


type StateAuth = {
    userProps?: UserPropsResponse
}

const initialStateAuth: StateAuth = {
    userProps: undefined
}
export default initialStateAuth
export type {UserProps,UserPropsResponse,StateAuth}