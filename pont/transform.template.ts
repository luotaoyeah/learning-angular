import { StandardDataSource } from '@luotao/pont-engine';

export default function(dataSource: StandardDataSource): StandardDataSource {
  console.log('dataSource', JSON.stringify(dataSource));
  return dataSource;
}
