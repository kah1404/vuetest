<template>
<div>
  <img class="logo" src="../../../../static/prospectorA.png"/>
  <div class="main-container">
    <div class="sub-container" >
      <div class="menus-containter">
        <!--TODO: SHOW RIGHT CHECKBOXES WHEN CLICKING MENU-->
        <input type="button" value="Prospects" class="menusText"  v-on:click="this.showProspects" id="1" />
        <input type="button" value="App leads" class="menusText"  v-on:click="this.showAppLeads" id="2" />
        <input type="button" value="Meetings" class="menusText"  v-on:click="this.showMeetings" id="3" />
      </div>

      <div class="grid-container" v-if="this.show === 1" >
      <text-box-with-check-box class="checkBoxeText" v-bind:some-text="Prospects[0]" />
      <text-box-with-check-box class="checkBoxeText" v-bind:some-text="Prospects[1]" />
      </div>
      <div class="grid-container" v-if="this.show === 2" >
        <text-box-with-check-box class="checkBoxeText" v-bind:some-text="AppLeads[0]" />
      </div>
      <div class="grid-container" v-if="this.show === 3" >
      <text-box-with-check-box class="checkBoxeText" v-bind:some-text="Meetings[0]" />
      <text-box-with-check-box class="checkBoxeText" v-bind:some-text="Meetings[1]" />
      </div>
    </div>

  </div>

</div>
</template>

<script>
  import TextBox from '../../UI Elements/TextFields/TextBox'
  import TextBoxWithCheckBox from '../../UI Elements/TextFields/TextBoxWithCheckBox'
    export default {
        name: "app-window",
      data() {
        return {
          menuTextField:[
            {text: "Prospects"},
            {text: "App leads"},
            {text: "Meetings"},

          ],
          Prospects:[
            {text: "Show prospects"},
            {text: "Show customers"},
          ],
          AppLeads:[
            {text: "Show App leads"},
          ],
          Meetings:[
            {text: "Show client meetings"},
            {text: "Show service meetings"},
          ],
          show:2
        }
      },
      components:{
        TextBoxWithCheckBox,
        TextBox
      },
      methods:{
        showProspects(){
          this.show = 1;
          console.log(this.show)
          //this.$store.commit('resetCount',1)
        },
        showAppLeads(){
          this.show = 2;
          console.log(this.show)

          //this.$store.commit('resetCount',2)
        },
        showMeetings(){
          this.show = 3;
          console.log(this.show)

          //this.$store.commit('resetCount',3)
        }

      }
  }
</script>

<style scoped>
.main-container{
  z-index: 1;
  position: absolute;
  width: 50rem;
  height: 125px;
  background-color: #333333;
  border-radius: 5px;
  user-select: none;
}
.sub-container{
  position: relative;
  left: 9rem;

}
.grid-container{
  position: absolute;
  top: 4rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  user-select: none;

}
.menus-containter{
  position: absolute;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  user-select: none;
}
.menusText{
  padding: 10px;
  font-size: 120%;
  text-align: center;
  border: solid #14B8BE 4px;
  background-color: #14B8BE;
  border-radius: 2px;
  user-select: none;
  color: white;
}
.menusText:hover {
  background-color: #12a0aa;
}
.checkBoxeText{
  font-size: 100%;
  color: white;
  text-align: center;
  user-select: none;
}
  .logo{
    position: absolute;
    z-index: 2;
    top: 0.5rem;
    left: 40rem;
    user-select: none;
    width: 200px;
  }
</style>
