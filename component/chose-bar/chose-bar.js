// component/chose-bar/chose-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },
  methods: {
    onItemClick(event){
       const index = event.currentTarget.dataset.index
       this.setData({
        currentIndex:index
       })
       this.triggerEvent('itemClick',{index,title:this.properties.titles[index]})
    }
  }
})
