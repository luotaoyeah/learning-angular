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
              label: 'Comoponents & Templates',
              expandedIcon: 'fa fa-folder-open',
              collapsedIcon: 'fa fa-folder',
              selectable: false,
              children: [
                {
                  label: 'Displaying Data',
                  data: {
                    path: '/doc/fundamental/component-template/displaying-data'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'Template Syntax',
                  data: {
                    path: '/doc/fundamental/component-template/template-syntax'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'User Input',
                  data: {
                    path: '/doc/fundamental/component-template/user-input'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'Lifecycle Hooks',
                  data: {
                    path: 'doc/fundamental/component-template/lifecycle-hooks'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'Component Interaction',
                  data: {
                    path: 'doc/fundamental/component-template/component-interaction'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'Component Style',
                  data: {
                    path: 'doc/fundamental/component-template/component-style'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'Angular Elements（TODO）',
                  data: {
                    path: 'doc/fundamental/component-template/angular-elements'
                  },
                  expandedIcon: 'fa fa-folder-open',
                  collapsedIcon: 'fa fa-folder'
                },
                {
                  label: 'Dynamic Components',
                  data: {
                    path: 'doc/fundamental/component-template/dynamic-components'
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
      if (node.label === 'Routing & Navigation') {
        this.router.navigate([node.data.path, 'foo'], {
          fragment: 'top',
          queryParams: {
            bar: 'bar',
            baz: ['baz01', 'baz02']
          }
        });
      } else {
        this.router.navigate([node.data.path]);
      }
    }
  }
}
