<template>
<div>
  <svgicon name="logo_turqouise" class="svgIcon"  :original="true" ></svgicon>
  <svgicon name="ProspectorLogo" class="logo"  :original="true" ></svgicon>
  <div class="main-container">
    <div class="sub-container" >
      <div class="menus-containter">
        <single-button class="menusText" value="Prospects"  v-on:eventChildButton="this.showProspects" id="1"/>
        <single-button class="menusText" value="App leads" v-on:eventChildButton="this.showAppLeads" id="2"/>
        <single-button class="menusText" value="Meetings" v-on:eventChildButton="this.showMeetings" id="3"/>
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
  import SingleButton from '../../UI Elements/Buttons/SingleButton'
  import '../../../compiled-icons/logo_turqouise'
  import '../../../compiled-icons/ProspectorLogo'
  import VueMonthlyPicker from "vue-monthly-picker/src/components/VueMonthlyPicker";

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
        VueMonthlyPicker,
        TextBoxWithCheckBox,
        TextBox,
        SingleButton
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
  width: 55rem;
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
  display: flex;
  margin: 5px;

}
.menus-containter{
  display: flex;
  margin: 5px;

}
.menusText{
  padding: 10px;
  margin: 5px;
  font-size: 120%;
  text-align: center;
  border: solid #14B8BE 4px;
  background-color: #14B8BE;
  border-radius: 2px;
  user-select: none;
  color: white;
  width: 110px;
}
.menusText:hover {
  background-color: #12a0aa;
}
.checkBoxeText{
  margin: 5px;
  font-size: 100%;
  color: white;
  text-align: center;
  user-select: none;
}
  .logo{
    position: absolute;
    z-index: 2;
    top: 0.5rem;
    left: 45rem;
    user-select: none;
    width: 200px;
  }
.svgIcon{
  z-index: 2;
  position: absolute;
  left: 0.6rem;
  width: 135px;
}
</style>
