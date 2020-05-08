// var chart = echarts.init(document.
//      querySelector('.map .chart'));
// var option={
// 	// visualMap: {
// 	//     show: true,
// 	//     max: 500,
// 	//     seriesIndex: [1],
// 	//     inRange: {
// 	//         color: ['#00467F', '#A5CC82'] // 蓝绿
// 	//     }
// 	// },
// 	// backgroundColor: '#ffffff',
// 	backgroundColor: '#222222',
// 	title: {
// 	    top: 350,
// 	    text: '山东省特派员分布',
// 	    // subtext: '',
// 	    x: 'center',
// 	    textStyle: {
// 	        color: '#00ffff',
// 	    }
// 	},
// 	    tooltip : {
// 			show: true,
// 	        trigger: 'item',
// 			backgroundColor: '#1de8fa',
// 			textStyle: {
// 			    // fontSize: 9,					
// 				// fontWeight: 600,                           
// 			    color: '#004ce6',
// 				},
// 	    },
// 	    // legend:{
// 	        // show:false,
// 	    // },
// 	    series: [   
// 	        {
// 	            type: 'map',
// 	            name:"山东特派员分布",
// 	            map: '山东',
// 	            // roam: true,
// 	            // zoom: 1.1,//设置缩放比例
// 	            // scaleLimit: {
// 	            //     min: 1,
// 	            //     max: 3
// 	            // },
// 				//滚轮放大缩小的极限
// 	            center:[118.4,36.022956],//地图中心点
// 				itemStyle: {
// 					normal: {				
// 					        areaColor: '#3ef6ff',
// 					        borderColor: '#32b4ce',
// 					        borderWidth: 0.5,
// 					        shadowColor: 'rgba(63, 218, 255, 0.5)',
// 					        shadowBlur: 30,
// 					    },
// 					    emphasis: {
// 					        areaColor: '#004ce6',
// 					    }
// 					},              
					
// 	            showLegendSymbol:false,
// 				label: {
//                         normal: {  
// 							position: 'bottom',
// 							formatter: '{b}',
// 							show: true,
//                             textStyle: {
//                                 fontSize: 10,					
// 								fontWeight: 600,                           
//                                 color: '#004ce6',								
//                             }
//                         },
// 						emphasis: {	
// 						    show: false,
// 							color: '#1de8fa'
// 						}
//                     },
// 	            data:[
// 					{ name: '济南市', value: 111 },
// 					{ name: '菏泽市', value: 158 },
// 					{ name: '德州市', value: 252 },
// 					{ name: '聊城市', value: 99 },
// 					{ name: '泰安市', value: 189 },
// 					{ name: '临沂市', value: 52 },
// 					{ name: '淄博市', value: 158 },
// 					{ name: '枣庄市', value: 152 },
// 					{ name: '滨州市', value: 189 },
// 					{ name: '潍坊市', value: 160 },
// 					{ name: '东营市', value: 80 },
// 					{ name: '青岛市', value: 180 },
// 					{ name: '烟台市', value: 190 },
// 					{ name: '威海市', value: 290 },
// 					{ name: '日照市', value: 190 },
// 					{ name: '济宁市', value: 190 },
// 					{ name: '莱芜市', value: 22 },
// 				]
// 	        }
// 	    ]
// 	};
// 	chart.setOption(option);            