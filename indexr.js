let yu=new Vue({
    el:'.wrapper',
    data:{ 
        
        textsql:[{
            title:'使用深层卷积神经网络进行ImageNet分类',
            URLs:'https://yq.aliyun.com/articles/74729',
            number:20321,
        },
        {
            title:'Tracking multiple objects with OpenCV',
            URLs:'https://www.pyimagesearch.com/2018/08/06/tracking-multiple-objects-with-opencv/',
            number:20356,
        },
        {
            title:'Getting Alexa to Respond to Sign Language Using Your Webcam and TensorFlow.js',
            URLs:'https://medium.com/tensorflow/getting-alexa-to-respond-to-sign-language-using-your-webcam-and-tensorflow-js-735ccc1e6d3f',
            number:20388,
        }
        ,
        {
            title:'DanceNet - Dance generator using Variational Autoencoder(Keras)',
            URLs:'https://github.com/jsn5/dancenet',
            number:20678,
        },
        {
            title:'A Principled Bayesian Workflow',
            URLs:'https://betanalpha.github.io/assets/case_studies/principled_bayesian_workflow.html',
            number:32112,
        },
        
    ],
   
},
    methods:{
        
        },
        computed:{
            dates(){
                let date=0;
                this.textsql.filter((item,index)=>{
                   date += item.number;
                   console.log(date);
                })
                return date;
        }
    }
    


    
})