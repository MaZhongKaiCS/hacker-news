<template>
<div class="commentBox">
  <div class="inputTextBox">
    <label class="title">用户名</label>
    <input class="inputArea" type="text" placeholder="你的用户名" v-model.trim="userName">
    <label class="title">评论内容</label>
    <textarea class="inputArea" name="comment" id="comment" cols="60" rows="10" placeholder="评论内容" v-model="userComment"></textarea>
    <button class="addComment" @click="addComment()">添加评论</button>
  </div>
  <div class="commentList">
    <ul class="list-group">
        <li class="list-group-items" v-for="(item, index) in commentsList" :key="item.id">
            <span @click="hideContent(item)">[-]   </span>
            <span class="user">用户： {{item.user}}</span> <br>
            <div class="contentBox" v-show="item.show">
              <div class="content">{{item.content}}</div>
              <button class="reply" @click="changeIsReply(item)">回复</button>
              <div class="replyBox" v-show="item.replyShow">
                <label class="replyTitle">用户名</label>
                <input class="replyInputArea" type="text" placeholder="你的用户名" v-model.trim="replyUserName">
                <label class="replyTitle">回复内容</label>
                <textarea class="replyInputArea" name="comment" id="comment" cols="50" rows="8" placeholder="回复内容" v-model="replyUserComment"></textarea>
                <button class="replyAddComment" @click="addReply(item, index)">回复</button>
              </div>
              <div class="replyList">
                <ul class="reply-group">
                  <li class="reply-group-items" v-for="replyItems in item.reply" :key="replyItems.id"> 
                    <span @click="hideReplyItems(replyItems)">[-]   </span>
                    <span class="replyUser">用户： {{replyItems.user}}</span> <br>
                    <div class="replyContent" v-show="replyItems.show">{{replyItems.comment}}</div>
                    <button class="replyButton">回复</button>
                  </li>
                </ul>
              </div>
            </div>
      </li>
    </ul>
    
  </div>
</div>
</template>

<script>
export default {
  components: {  },
  name: 'inputTextBox',
  props: {
  },
  data() {
    return {   
      commentsList:[],// 评论列表
      userName:'', // 用户名
      userComment:'', // 评论内容
      replyUserName: '', // 回复用户名
      replyUserComment: '', // 回复内容
    }
  },
  methods: {
    // 获取 localStorage 中的评论列表
    localComments() {
      this.commentsList = JSON.parse(localStorage.getItem('comments') || '[]')
    },
    // 添加新的评论到评论列表中
    addComment() {
      // 获取当前评论
      let comment = {
        id: Date.now(), // 评论时间，唯一性作为 key
        user: this.userName, // 用户名
        content: this.userComment, // 评论内容
        show: true, // content 出现、隐藏
        replyShow: false, // 回复区是否出现
        reply: [] // 回复的列表
      }
      // 从 localStorage 中获取评论列表
      let list = JSON.parse(localStorage.getItem('comments') || '[]')
      if (comment.user && comment.content) {
        list.push(comment)
        localStorage.setItem('comments', JSON.stringify(list))
        this.localComments()
      }
      this.userName = ''
      this.userComment = ''
    },
    hideContent(item) {
      item.show = !item.show
      // for (let i = 0; i < item.reply.length; i++) {
      //   item.reply[i].show = !item.reply[i].show;
      // }
    },
    addReply(item, index) {
      // 获取当前回复
      let reply = {
        id: Date.now(),
        user: this.replyUserName,
        comment: this.replyUserComment,
        show: true
      }
      // 从 localStorage 中获取评论列表
      let list = JSON.parse(localStorage.getItem('comments') || '[]')
      if (reply.user && reply.comment) {
        console.log(true);
        list[index].reply.push(reply)
        localStorage.setItem('comments', JSON.stringify(list))
        this.localComments()
      } 
      this.replyUserName = ''
      this.replyUserComment = ''
      item.replyShow = !item.replyShow
    },
    changeIsReply(item) {
      item.replyShow = !item.replyShow
    },
    hideReplyItems(replyItems) {
      console.log(replyItems);
      replyItems.show = !replyItems.show
    }
  },
  created() {
    // 实例化之后获取评论列表
    this.localComments()
    console.log(this.commentsList);
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.commentBox{
    .inputTextBox{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .title {
        margin: 10px 0 0 0;
      }
      .inputArea {
        margin: 10px 0 0 0;
      }
      .addComment{
        margin: 10px 0 0 0;
      }
    }
    .commentList{
      .list-group{
        .list-group-items{
          margin: 40px 0 0 0;
          .user{
            margin: 10px 0 10px 0;
            font-size: 20px;
            font-weight: 500;
          }
          .contentBox{
              .content{
                margin: 10px 0 10px 0;
              }
              .reply{
              }
              .replyBox{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                .replyTitle{

                }
                .replyInputArea{

                }
              }
              .replyList{
                .reply-group{

                }
                .reply-group-items{
                  .replyUser{
                    margin: 10px 0 10px 0;
                    font-size: 14px;
                    font-weight: 500;
                  }
                  .replyContent{
                    margin: 10px 0 10px 0;
                    font-size: 14px;
                  }
                }
              }
          }
        }
      }
    }
}

</style>

