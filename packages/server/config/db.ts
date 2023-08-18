import '@/utils/load-env';

export const dbConfig = {
  dbUrl: process.env.MONGODB_URL,
  dbOptions: {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
  }
};