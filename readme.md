### 集成说明
npm install react-native-ch-alert@lastversion
yarn add react-native-ch-alert@lastversion

### 参数说明
```
static propTypes={
       titleName:PropTypes.string,     //提示title
       titleColor:PropTypes.string,     //提示title颜色
       titleSize:PropTypes.int,        //提示字体大小
       contentTitle:PropTypes.string   ,       //提示内容
       contentColor:PropTypes.string,      //设置内容颜色
       contentSize:PropTypes.int,           //设置content 字体大小
       isBlank:PropTypes.boolean  ,  // 点击空白是否关闭弹出框
       cancelTitle:PropTypes.string ,      //取消按钮内容
       cancelTitleColor:PropTypes.string,   //取消按钮字体颜色
       cancelTitleSize:PropTypes.int,    // 取消按钮字体大小
       cancelBorderColor:PropTypes.string,  //取消按钮border 颜色
       sureTitle:PropTypes.string  ,       //确定按钮内容
       sureTitleColor:PropTypes.string,   //确定按钮字体颜色
       sureTitleSize:PropTypes.int,       //确定按钮字体大小
       sureBgColor:PropTypes.string,        //确定按钮背景颜色
       alertBgColor:PropTypes.string,     //alert背景颜色
       hideLeftBtn:PropTypes.boolean,     //是否隐藏左边按钮

   }
```
### 使用说明

```
import  CHAlertModal ,{Alert} from 'react-native-ch-alert'

export  default class App extends React.Component{

    btnClick(){


     
        Alert
            .show()
            .setTitleName("弹出框")
            .setTitleColor('#f0f')
            .setTitleSize(16)
            .setContentTitle("这个内容这是内容")
            .setContentColor('rgb(51,51,51)')
            .setContentSize(14)
            .setAlertBgColor('#fff')
            .setCancelTitle("左边")
            .setIsBlankHide(false)
            .setCancelTitleColor('#f0f')
            .setCancelTitleSize(20)
            .setCancelBorderColor('#f0f')
            .setSureTitle("右边")
            .setSureTitleColor('#f0f')
            .setSureTitleSize(20)
            .setSureBgColor('#0ff')
            .setHideLeftBtn(true)


        Alert.sureCallBack(function () {
            console.log("----点击了-----")
            Alert.hide()
        })

        Alert.cancelCallBack(function () {

            Alert.hide()
            console.log("-------点击了取消----")
        })
  }
  render(){
      return (
          <>
              <TouchableOpacity
                  style={{width:100,height:100,backgroundColor:'#ff0'}}
                  onPress={()=>this.btnClick()}
              >

              </TouchableOpacity>
              <CHAlertModal/>
          </>
      )
  }
};

```

