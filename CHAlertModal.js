import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    Text,
    StatusBar,
    FlatList,
    TextInput,
    Image,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types'
export const  ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

let alert;
export default {


    /**
     *  显示
     * @returns {default}
     */
    show:function () {
        alert.show()
        return this;
    },

    /**
     * 点击了确定按钮回调
     * @param callBack 回调的方法
     * @returns {default}
     */
    sureCallBack:function(callBack){

        alert.sureCallBack(callBack)
        return this;

    },

    /**
     * 取消了点击
     * @param callBack
     */
    cancelCallBack:function(callBack){
        alert.cancelCallBack(callBack)
        return this
    },

    /**
     * 隐藏
     */
    hide:function () {
        alert.hide()
    },

    /**
     * 设置提示文字
     * @returns {default}
     */
    setTitleName:function(titleName){
        alert.setTitleName(titleName)
        return this
    },

    /**
     * 设置title color
     * @param color
     * @returns {default}
     */
    setTitleColor:function(color){

        alert.setTitleColor(color)
        return this
    },
    /**
     * 设置title字体大小
     * @param size
     * @returns {default}
     */
    setTitleSize:function(size){

        alert.setTitleSize(size)
        return this
    },
    /**
     * 设置内容
     * @param contentTitle
     * @returns {default}
     */
    setContentTitle:function(contentTitle){

        alert.setContentTitle(contentTitle)
        return this

    },
    /**
     * 设置内容颜色
     * @param color
     * @returns {default}
     */
    setContentColor:function(color){
        alert.setContentColor(color)
        return this
    },
    /**
     * 设置内容大小
     * @param size
     * @returns {default}
     */
    setContentSize:function(size){

        alert.setContentSize(size)
        return this
    },
    /**
     * 设置弹出框背景颜色
     * @param color
     * @returns {default}
     */
    setAlertBgColor:function(color){
        alert.setAlertBgColor(color)
        return this
    },

    /**
     * 点击空白地方是否隐藏弹出框
     * @param isHide
     */
    setIsBlankHide:function(isHide){

        alert.setIsBlankHide(isHide)
        return this;
    },

    /**
     * 设置确定按钮title
     * @param title
     * @returns {default}
     */
    setSureTitle:function(title){

        alert.setSureTitle(title)
        return this
    },
    /**
     * 确定按钮字体颜色
     * @param title
     * @returns {default}
     */
    setSureTitleColor:function(title){
        alert.setSureTitleColor(title)
        return this
    },
    /**
     * 确定按钮字体大小
     * @param size
     * @returns {default}
     */
    setSureTitleSize:function(size){
        alert.setSureTitleSize(size)
        return this
    },
    /**
     * 确定按钮背景颜色
     * @param color
     * @returns {default}
     */
    setSureBgColor:function(color){
        alert.setSureBgColor(color)
        return this
    },
    /**
     * 设置取消按钮title
     * @param title
     * @returns {default}
     */
    setCancelTitle:function(title){
        alert.setCancelTitle(title)
        return this
    },
    /**
     * 取消按钮字体颜色
     * @param color
     * @returns {default}
     */
    setCancelTitleColor:function(color){
        alert.setCancelTitleColor(color)
        return this
    },
    /**
     * 取消按钮字体大小
     * @param size
     * @returns {default}
     */
    setCancelTitleSize:function(size){
      alert.setCancelTitleSize(size)
        return this
    },
    /**
     * 取消按钮边框颜色
     * @param color
     * @returns {default}
     */
    setCancelBorderColor:function(color){

        alert.setCancelBorderColor(color)
        return this
    },
    /**
     * 是否隐藏左边按钮
     * @param isHide
     * @returns {default}
     */
    setHideLeftBtn:function(isHide){
        alert.setIsBlankHide(isHide)
        return this
    },


}

export class CHAlertModal extends Component {
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
    constructor(props){
        super(props)
        this.state={
            isVisible:false,
            titleName:this.props.titleName?this.props.titleName:'温馨提示',
            titleColor:this.props.titleColor?this.props.titleColor:'#2F3335',
            titleSize:this.props.titleSize?this.props.titleSize:16,
            contentTitle:this.props.contentTitle?this.props.contentTitle:'',
            contentColor:this.props.contentColor?this.props.contentColor:'#000',
            contentSize:this.props.contentSize?this.props.contentSize:15,
            isBlank:this.props.isBlank?this.props.isBlank:false,
            sureTitle:this.props.sureTitle?this.props.sureTitle:"确定",
            sureTitleColor:this.props.sureTitleColor?this.props.sureTitleColor:'fff',
            sureTitleSize:this.props.sureTitleSize?this.props.sureTitleSize:15,
            sureBgColor:this.props.sureBgColor?this.props.sureBgColor:'#148BFA',
            cancelTitle:this.props.cancelTitle?this.props.cancelTitle:'取消',
            cancelTitleColor:this.props.cancelTitleColor?this.props.cancelTitleColor:'#8C8C8C',
            cancelTitleSize:this.props.cancelTitleSize?this.props.cancelTitleSize:15,
            cancelBorderColor:this.props.cancelBorderColor?this.props.cancelBorderColor:'#D0D0D0',
            alertBgColor:this.props.alertBgColor?this.props.alertBgColor:'#fff',
            hideLeftBtn:this.props.hideLeftBtn?this.props.hideLeftBtn:false,



            sureCallBack:null,       //点击右边成功按钮回调的方法
            cancelCallBack:null      //点击左边按钮回调的方法
        }


        alert = this;

    }

    show(){


        this.setState({
            isVisible:true,
        })
    }
    hide(){
        this.setState({
            isVisible:false,
            titleName:'温馨提示',
            contentTitle:'',
            isBlank:false,
            cancelTitle:'取消',
            cancelTitleColor:'#8C8C8C',
            cancelTitleSize:15,
            cancelBorderColor:'D0D0D0',
            sureTitle:"确定",
            sureTitleColor:'#fff',
            sureTitleSize:15,
            sureBgColor:'#148BFA',
            titleColor:'#2F3335',
            titleSize:16,
            contentColor:'#000',
            contentSize:15,
            alertBgColor:'#fff',
            hideLeftBtn:false
        })
    }

    sureCallBack(callBack){


        this.setState({
            sureCallBack:callBack
        })

    }

    cancelCallBack(callBack){

        this.setState({
            cancelCallBack:callBack
        })
    }

    setTitleName(titleName){

        this.setState({
            titleName:titleName
        })
    }
    setTitleColor(color){
        this.setState({
            titleColor:color
        })
    }
    setTitleSize(size){

        this.setState({
            titleSize:size
        })
    }
    setContentTitle(contentTitle){
        console.log("------contentlengt-----",contentTitle.length)
        this.setState({
            contentTitle:contentTitle
        })
    }

    setContentColor(color){
        this.setState({
            contentColor:color
        })
    }
    setContentSize(size){
        this.setState({
            contentSize:size
        })
    }

    setAlertBgColor(color){
        this.setState({
            alertBgColor:color
        })
    }

    setIsBlankHide(isHide){
        this.setState({
            hideLeftBtn:isHide
        })
    }
    setCancelTitle(title){
        this.setState({
            cancelTitle:title
        })
    }

    setCancelTitleColor(color){
        this.setState({
            cancelTitleColor:color
        })
    }
    setCancelTitleSize(size){
        this.setState({
            cancelTitleSize:size
        })
    }
    setCancelBorderColor(color){
        this.setState({
            cancelBorderColor:color
        })
    }
    setSureTitle(title){
        this.setState({
            sureTitle:title
        })
    }
    setSureTitleColor(color){
        this.setState({
            sureTitleColor:color
        })
    }
    setSureTitleSize(size){
        this.setState({
            sureTitleSize:size
        })
    }
    setSureBgColor(color){
        this.setState({
            sureBgColor:color
        })
    }
    setHideLeftBtn(isHide){
        this.setState({
            hideLeftBtn:isHide
        })
    }
    clickBlank(){
        console.log("---点击了-----")
       if (this.state.isBlank)  this.hide();
    }
    clickSureBtn(){

        // this.hide()
        // const {callBack} = this.props;

       if (this.state.sureCallBack) this.state.sureCallBack();

    }
    clickCancelBtn(){

        if (this.state.cancelCallBack) this.state.cancelCallBack()

    }
    render(){
        return(
            <Modal
                visible={this.state.isVisible}
                animationType='fade'
                transparent={true}
                style={{flex:1}}
                hardwareAccelerated={true}
            >
                <View style={{backgroundColor:'rgba(0,0,0,0.2)',flex:1,alignItems:'center',justifyContent:'center'}}
                >

                    <TouchableOpacity style={{flex:1,backgroundColor:'',width:'100%'}}
                                      onPress={()=>this.clickBlank()}
                    ></TouchableOpacity>
                    <View style={{marginLeft:30,marginRight:30,backgroundColor:this.state.alertBgColor,borderRadius:5}}>

                        {
                            <View style={{height:40,flexDirection:'row',backgroundColor:''}}>
                                <View style={{width:60}}></View>
                                <View style={{flex:1,alignItems:'center',height:40,justifyContent:'center'}}>
                                    <Text style={{fontSize:this.state.titleSize,color:this.state.titleColor}}>{this.state.titleName}</Text>
                                </View>
                                <TouchableOpacity style={{width:60,backgroundColor:'',alignItems:'flex-end',marginRight:5,marginTop:5}}

                                >
                                </TouchableOpacity>
                            </View>
                        }


                        {
                            <View style={{justifyContent:'center',backgroundColor:'',marginRight:5,marginLeft:5}}>

                                <View style={[{},this.state.contentTitle.length<=40?{height:80}:null]}>
                                    <Text style={{
                                        color:this.state.contentColor,
                                        fontSize:this.state.contentSize,
                                        textAlign:'left',
                                        textAlignVertical:'auto'
                                    }}>
                                        {this.state.contentTitle}
                                    </Text>
                                </View>



                            </View>
                        }


                        {
                            <View style={{width:'100%',height:60,backgroundColor:'',flexDirection:'row'}}>


                                {!this.state.hideLeftBtn?
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity
                                        style={{justifyContent:'center',
                                            alignItems:'center',
                                            width:'80%',height:34,
                                            borderColor:this.state.cancelBorderColor,
                                            borderWidth:0.5,
                                            borderRadius:3
                                        }}
                                        onPress={()=>this.clickCancelBtn()}
                                    >
                                        <Text style={{color:this.state.cancelTitleColor,fontSize:this.state.cancelTitleSize}}>{this.state.cancelTitle}</Text>
                                    </TouchableOpacity>
                                </View>:null
                                }

                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity
                                        style={{justifyContent:'center',
                                            alignItems:'center',
                                            width:'80%',height:34,
                                            borderColor:'#D0D0D0',
                                            borderWidth:0.5,
                                            backgroundColor:this.state.sureBgColor,
                                            borderRadius:3
                                        }}
                                        onPress={()=>this.clickSureBtn()}
                                    >
                                        <Text style={{color:this.state.sureTitleColor,fontSize:this.state.sureTitleSize}}>{this.state.sureTitle}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }

                    </View>

                    <TouchableOpacity style={{flex:1,backgroundColor:'',width:'100%'}}
                                      onPress={()=>this.clickBlank()}
                    ></TouchableOpacity>

                </View>

            </Modal>

        )
    }
}




const styles = StyleSheet.create({
    container: {
        backgroundColor:'#0ff',
        flex:1
    },
});
