import { Client, Account, Databases, Storage } from "appwrite";

export const appwriteConfig ={
    endpointUrl : import.meta.env.vite_appwrite_api_endpoint,
    projectId : import.meta.env.vite_appwrite_project_id,
    apiKey : import.meta.env.vite_appwrite_api_key,
    databaseId : import.meta.env.vite_appwrite_db_id,
    userCollectionId : import.meta.env.vite_appwrite_users_collection_id,
    tripCollectionId : import.meta.env.vite_appwrite_trips_collection_id,


}

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl) 
.setProject(appwriteConfig.projectId)


const account = new Account(client);
const database = new Databases(client);

const storage = new Storage(client);

export { client, account, database, storage };