import { Mod, StandardDataSource } from '@luotao/pont-engine';

/**
 * 数据源预处理器
 * https://github.com/alibaba/pont#transformpath
 * @param dataSource 数据源
 */
export default function(dataSource: StandardDataSource): StandardDataSource {
  /*
   * change mod name to PascalCase
   */
  dataSource.mods.forEach((mod: Mod) => {
    if (mod.name.length > 0) {
      const chars = mod.name.split('');
      chars.splice(0, 1, mod.name[0].toUpperCase());
      mod.name = chars.join('');
    }

    mod.name = `${mod.name}Controller`;
  });

  return dataSource;
}
