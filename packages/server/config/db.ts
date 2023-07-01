import '@/utils/load-env';

const dbConfig = {
  dbUrl: process.env.MONGODB_URL,
  dbOptions: {
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
  }
};

export default dbConfig;