<template>
    <div>
        <li v-for="value in reply" :key="value.commentReplyid">
            <p class="reply" @click="showReply(value)">
                <span class="commenter">{{replyName?`${value.userName} to ${replyName}`:value.userName}}: </span>
                <span>{{value.commentContent?value.commentContent:value.replyContent}}</span>
            </p>
            <reply :reply="value.replys" :replyName="value.userName"/>
        </li>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .commenter{
        color: hotpink;
    }
    .reply{
        margin: .1rem 0;
    }
</style>