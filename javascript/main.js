var resumePage = new Vue({
    el: '#vue-resume',
    data: function() {
        return {
            // loading
            isloading:true,
            // status
            status:{
                introduction: true,
                pInformation: false,
                skilled:false,
                porfolio:false,
            },
            // header aside
            headerAside: false,
            // p-information
            pInfo: {
                graduate:true,
                experience:true,
            },
            // skilled-1
            skilled:[
                {
                    name:'html',
                    class:'html',
                    index:0,
                    status:false,
                },
                {
                    name:'css',
                    class:'css',
                    index:1,
                    status:false,
                    list:[
                        {
                            name:'sass',
                            class:'sass',
                            link:'https://sass-lang.com/',
                        },
                        {
                            name:'bootstrap',
                            class:'bootstrap',
                            link:'https://getbootstrap.com/',
                        },
                    ],
                },
                {
                    name:'javascript',
                    class:'javascript',
                    index:2,
                    status:false,
                    list:[
                        {
                            name:'jquery',
                            class:'jquery',
                            link:'https://jquery.com/',
                        },
                        {
                            name:'ajax',
                            class:'ajax',
                            link:'https://zh.wikipedia.org/wiki/AJAX',
                        },
                        {
                            name:'vue',
                            class:'vue',
                            link:'https://vuejs.org/',
                        },
                        {
                            name:'angular',
                            class:'angular',
                            link:'https://angular.io/',
                        },
                        {
                            name:'three.js',
                            class:'threeJs',
                            link:'https://threejs.org/',
                        },
                        {
                            name:'create.js',
                            class:'createJs',
                            link:'https://createjs.com/',
                        },
                        {
                            name:'TweenMax',
                            class:'tweenmax',
                            link:'https://greensock.com/tweenmax/',
                        },
                        {
                            name:'pixi.js',
                            class:'pixijs',
                            link:'https://www.pixijs.com/',
                        },
                    ],
                },
                {
                    name:'UI/UX',
                    class:'uiux',
                    index:3,
                    status:false,
                    list:[
                        {
                            name:'photoshop',
                            class:'photoshop',
                            link:'https://www.adobe.com/tw/products/photoshop.html',
                        },
                        {
                            name:'illustrator',
                            class:'illustrator',
                            link:'https://www.adobe.com/tw/products/illustrator.html',
                        },
                        {
                            name:'RWD',
                            class:'rwd',
                            link:'https://zh.wikipedia.org/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BD%91%E9%A1%B5%E8%AE%BE%E8%AE%A1',
                        },
                    ],
                },
                {
                    name:'web graphic',
                    class:'webGraphic',
                    index:4,
                    status:false,
                    list:[
                        {
                            name:'svg',
                            class:'svg',
                            link:'https://developer.mozilla.org/zh-TW/docs/Web/SVG/Tutorial/Getting_Started',
                        },
                        {
                            name:'canvas',
                            class:'canvas',
                            link:'https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API',
                        },
                    ],
                },
                {
                    name:'media edit',
                    class:'mediaEdit',
                    index:5,
                    status:false,
                    list:[
                        {
                            name:'premiere',
                            class:'premiere',
                            link:'https://www.adobe.com/tw/products/premiere.html',
                        },
                        {
                            name:'A effect',
                            class:'Aeffect',
                            link:'https://www.adobe.com/tw/products/aftereffects.html',
                        },
                        {
                            name:'animate',
                            class:'animate',
                            link:'https://www.adobe.com/tw/products/animate.html',
                        },
                    ],
                },
                {
                    name:'assist',
                    class:'assist',
                    index:6,
                    status:false,
                    list:[
                        {
                            name:'terminal',
                            class:'terminal',
                            link:'https://zh.wikipedia.org/wiki/Windows_Terminal',
                        },
                        {
                            name:'vscode',
                            class:'vscode',
                            link:'https://code.visualstudio.com/',
                        },
                        {
                            name:'npm',
                            class:'npm',
                            link:'https://zh.wikipedia.org/wiki/Npm',
                        },
                        {
                            name:'GitHub',
                            class:'gitHub',
                            link:'https://github.com/github',
                        },
                        {
                            name:'GitLab',
                            class:'gitLab',
                            link:'https://gitlab.com/gitlab-org',
                        },
                    ]
                },
            ],
            // porfolio
            porfolio:[
                {
                    name:'Captain America',
                    class:'captain-america',
                    link:'https://steve19890707.github.io/captain-america/',
                },
                {
                    name:'spartan',
                    class:'spartan',
                    link:'https://steve19890707.github.io/spartan/',
                },
                {
                    name:'gundam',
                    class:'gundam',
                    link:'https://steve19890707.github.io/gundam/',
                },
                {
                    name:'ufo',
                    class:'ufo',
                    link:'https://steve19890707.github.io/ufo/',
                },
                {
                    name:'slot game',
                    class:'slot',
                    link:'https://steve19890707.github.io/slotGame/',
                },
                {
                    name:'page 404',
                    class:'page404',
                    link:'https://steve19890707.github.io/page404/',
                },
                {
                    name:'snake',
                    class:'snake',
                    link:'https://steve19890707.github.io/snake/',
                },
                {
                    name:'minions',
                    class:'minions',
                    link:'https://steve19890707.github.io/0722_minions-steve/',
                },
                {
                    name:'soccer ball',
                    class:'soccer',
                    link:'https://steve19890707.github.io/soccerBallminiGame/',
                },
            ]
        }
    },
    mounted: function(){
        this.isloading = false;
    },
    methods: {
        NextMove: function(status1,status2,status3,status4){
            this.status.introduction = status1;
            this.status.pInformation = status2;
            this.status.skilled = status3;
            this.status.porfolio = status4;
            
        },
        headerToggle: function(status1,status2,status3,status4){
            this.status.introduction = status1;
            this.status.pInformation = status2;
            this.status.skilled = status3;
            this.status.porfolio = status4;
            this.headerAside = false;
        },
        skilledOpen: function(obj){
            let skilledLen = this.skilled.length;
            for(i=0;i<skilledLen;i++){
                this.skilled[i].status = false;
            }
            this.skilled[obj].status = true;
        },
        sklilledClose: function(){
            let skilledLen = this.skilled.length;
            for(i=0;i<skilledLen;i++){
                this.skilled[i].status = false;
            }
        }
    }
})