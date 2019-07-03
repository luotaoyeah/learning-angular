import { StandardDataSource } from '@luotao/pont-engine';

/**
 * 数据源预处理器
 * https://github.com/alibaba/pont#transformpath
 * @param dataSource 数据源
 */
export default function(dataSource: StandardDataSource): StandardDataSource {
  return dataSource;
}
