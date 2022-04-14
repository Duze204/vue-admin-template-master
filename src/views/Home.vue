<template>
    <div class="mainp" style="position: fixed;width:100%;height:100%;overflow:scroll;" >
    </div>
</template>

<script>
export default {
    name: 'home',
}
</script>


<style scoped>
.choice {
    width: 20px;
}


.time_choice {
    width: 100px;
    height: 30px;
    border: none;
    margin: 1px 1px;
}

.inline {
    margin: 0;
    width: 250px;
    padding: 0;
    display: inline-block;
    _display: inline;
    *display: inline;
    zoom: 1;
}

button {
    padding: 10px;
    color: black;
    border: 1px solid;
    cursor: pointer;
    background: white;
}

.header1 {
    padding: 50px;
}

.body {
    text-align: center;
    height: auto;
}

.mainp {
width: 100%;
}
</style>
