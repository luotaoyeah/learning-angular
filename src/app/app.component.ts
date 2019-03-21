import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';

/*
 * 使用 @Component 装饰器将一个类标识为一个 component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  constructor(private router: Router) {}

  /** 所有节点 */
  nodes: Array<TreeNode> = [
    {
      label: 'DOC',
      expandedIcon: 'fa fa-folder-open',
      collapsedIcon: 'fa fa-folder',
      selectable: false,
      children: [
        {
          label: 'TUTORIAL',
          data: { path: '/doc/tutorial/dashboard' },
          expandedIcon: 'fa fa-folder-open',
          collapsedIcon: 'fa fa-folder',
          leaf: true
        },
        {
          label: 'FUNDAMENTAL',
          expandedIcon: 'fa fa-folder-open',
          collapsedIcon: 'fa fa-folder',
          selectable: false,
          children: [
            {
              label: 'Architecture',
              expandedIcon: 'fa fa-folder-open',
              collapsedIcon: 'fa fa-folder',
              selectable: false,
              children: [
                {
                  label: 'Intro to Components',
                  data: {
                    path: '/doc/fundamental/architecture/intro-into-component'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'Intro to Services and DI',
                  data: {
                    path: '/doc/fundamental/architecture/di'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                }
              ]
            },
            {
              label: 'Routing & Navigation',
              data: {
                path: '/doc/fundamental/routing-navigation'
              },
              expandedIcon: 'fa fa-folder-open',
              collapsedIcon: 'fa fa-folder'
            }
          ]
        }
      ]
    }
  ];

  /** 当前选中的节点 */
  selectedNode: TreeNode | null = null;

  selectNode({ node }: { node: TreeNode }) {
    if (node.data && node.data.path) {
      this.router.navigate([node.data.path]);
    }
  }
}
