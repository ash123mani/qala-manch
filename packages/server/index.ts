import { replaceTscAliasPaths } from 'tsc-alias';
import apiServier from './server';

replaceTscAliasPaths({
  configFile: './tsconfig.json'
});

apiServier.up();