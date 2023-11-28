import { PersistConfig, persistReducer } from "redux-persist";
import session from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "../../features/auth/auth.state";

const lembreDeMim = localStorage.getItem("lembre")

const configLogin: PersistConfig<any> = {
  key: "pizza",
  storage: lembreDeMim == undefined ? session : storage,
  whitelist: ['userProps'],
  //ATENCAO : NOMES AQUI DEVEM SER UNICOS
  // A lista de chaves de estado que você deseja persistir (somente 'userResponseLogin' neste caso)
};
export const authPersisted = persistReducer(configLogin, authReducer);
