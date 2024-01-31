"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[358],{1927:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(5893),r=i(1151);const o={},s="Using the built-in Actions",l={id:"TTGit/usingactions",title:"Using the built-in Actions",description:"This section will tell you on how to use the built-in TTGit actions feature, which is free to use, and comes with no cost.",source:"@site/docs/TTGit/usingactions.md",sourceDirName:"TTGit",slug:"/TTGit/usingactions",permalink:"/TTGit/usingactions",draft:!1,unlisted:!1,editUrl:"https://github.com/TTNRT/docs-docusaurus/tree/main/docs/TTGit/usingactions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup your Git client",permalink:"/TTGit/setupgit"},next:{title:"Using the CI",permalink:"/TTGit/usingtheci"}},a={},c=[{value:"Obtaining a token",id:"obtaining-a-token",level:2},{value:"Installing Forgejo Runner",id:"installing-forgejo-runner",level:2},{value:"Registrating",id:"registrating",level:2},{value:"Using the binary",id:"using-the-binary",level:3},{value:"Running",id:"running",level:2},{value:"Testing workflows",id:"testing-workflows",level:2},{value:"Sources",id:"sources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-the-built-in-actions",children:"Using the built-in Actions"}),"\n",(0,t.jsx)(n.p,{children:"This section will tell you on how to use the built-in TTGit actions feature, which is free to use, and comes with no cost."}),"\n",(0,t.jsx)(n.p,{children:"Actions is a continuous integration and continuous delivery (CI/CD) feature that allows you to automate your build, test and deployment pipelines in Forgejo, the software TTGit uses. It is compatible with GitHub Actions."}),"\n",(0,t.jsx)(n.p,{children:"Due to outstanding security issues and bus factor (we need more maintainers for our CI service to get it running), we are currently not yet providing hosted Actions. If you need TTGit to host your CI, please use Woodpecker CI instead."}),"\n",(0,t.jsx)(n.p,{children:"But you can already connect your own Runner to TTGit. CI jobs will run on your machine, and the result will be displayed in TTGit."}),"\n",(0,t.jsx)(n.p,{children:"This guide will walk you through setting up your own Forgejo Actions Runner to use for CI jobs."}),"\n",(0,t.jsx)(n.h2,{id:"obtaining-a-token",children:"Obtaining a token"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:'Make sure to enable actions. Repository Actions are disabled by default and will require you to enable them in the "Advanced Settings" section of the settings page.'})}),"\n",(0,t.jsx)(n.p,{children:"Before deploying the Runner, you need to obtain a registration token from TTGit. Registration tokens are used by the Runner and TTGit to share secrets and configurations."}),"\n",(0,t.jsx)(n.p,{children:"You can add Runners to your account, organization, or repository. Choosing where you obtain the registration token will determine where your Runner will accept workflows from."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Go to the account/organization/repository settings page."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click on Actions."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click on Runners."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click on Create new Runner."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy the registration token."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"creating_the_runner",src:i(3956).Z+"",width:"552",height:"274"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-forgejo-runner",children:"Installing Forgejo Runner"}),"\n",(0,t.jsx)(n.p,{children:"Forgejo Runner is released in both binary and container image (OCI) forms:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download the binary to run on your machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget -O forgejo-runner https://code.forgejo.org/forgejo/runner/releases/download/v3.3.0/forgejo-runner-3.3.0-linux-amd64\nchmod +x forgejo-runner\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Make sure to replace ",(0,t.jsx)(n.code,{children:"amd64"})," with ",(0,t.jsx)(n.code,{children:"arm64"})," if your host machine is on ARM."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Or download the container image and run it using Docker:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run --rm code.forgejo.org/forgejo/runner:3.3.0 forgejo-runner --version\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"registrating",children:"Registrating"}),"\n",(0,t.jsx)(n.p,{children:"The Forgejo runner needs to connect to a Forgejo instance and must be registered before doing so. It will give it permission to read the repositories and send back information to Forgejo such as the logs or its status. There is a few ways to register your runner for TTGit."}),"\n",(0,t.jsx)(n.h3,{id:"using-the-binary",children:"Using the binary"}),"\n",(0,t.jsx)(n.p,{children:"A special kind of token is needed and can be obtained from the Create new runner button:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"in /admin/actions/runners to accept workflows from all repositories."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"in /org/YOURORG/settings/actions/runners to accept workflows from all repositories within the organization."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"in /user/settings/actions/runners to accept workflows from all repositories of the logged in user"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"in /YOURUSER/YOURREPO/settings/actions/runners to accept workflows from a single repository."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For instance, using a token obtained for a test repository from TTGit"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"forgejo-runner register --no-interactive --token {TOKEN} --name runner --instance https://gitea.ttnrtsite.me\n"})}),"\n",(0,t.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,t.jsx)(n.p,{children:"Once the Forgejo runner is successfully registered, it can be run from the directory in which the .runner file is found with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"forgejo-runner daemon\n"})}),"\n",(0,t.jsx)(n.p,{children:"To verify it is actually available for the targeted repository, go to /YOURUSER/YOURREPO/settings/actions/runners. It will show the runners:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"dedicated to the repository with the repo type"}),"\n",(0,t.jsx)(n.li,{children:"available to all repositories within an organization or a user"}),"\n",(0,t.jsx)(n.li,{children:"available to all repositories, with the Global type"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"list_of_runners",src:i(6694).Z+"",width:"1044",height:"245"})}),"\n",(0,t.jsx)(n.h2,{id:"testing-workflows",children:"Testing workflows"}),"\n",(0,t.jsx)(n.p,{children:"To test your CI runner setup, you can use the following demo workflow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"on: [push]\njobs:\n  test:\n    runs-on: docker\n    steps:\n      - run: echo All Good\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The runner seeks action recipes from ",(0,t.jsx)(n.code,{children:".forgejo/workflows"}),", so make sure your file is in the required path."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"demo-workflow",src:i(4149).Z+"",width:"923",height:"319"})}),"\n",(0,t.jsx)(n.h2,{id:"sources",children:"Sources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://forgejo.org/docs/next/admin/actions/",children:"Forgejo runner"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.gitea.com/usage/actions/overview",children:"Gitea runner"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3956:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/creating-the-runner-1dccbf09590b7c9762ba3119e57bb466.png"},4149:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/demo-workflow-0a0453468866a176118b760f88720b76.png"},6694:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/list-of-runners-eeb0c3cdbe949794127b4ac6d0cc59f9.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(7294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);