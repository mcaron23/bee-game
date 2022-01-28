gdjs._49Code = {};
gdjs._49Code.GDbeeObjects1= [];
gdjs._49Code.GDbeeObjects2= [];
gdjs._49Code.GDbeeObjects3= [];
gdjs._49Code.GDflower1Objects1= [];
gdjs._49Code.GDflower1Objects2= [];
gdjs._49Code.GDflower1Objects3= [];
gdjs._49Code.GDflower2Objects1= [];
gdjs._49Code.GDflower2Objects2= [];
gdjs._49Code.GDflower2Objects3= [];
gdjs._49Code.GDflower3Objects1= [];
gdjs._49Code.GDflower3Objects2= [];
gdjs._49Code.GDflower3Objects3= [];
gdjs._49Code.GDflower4rareObjects1= [];
gdjs._49Code.GDflower4rareObjects2= [];
gdjs._49Code.GDflower4rareObjects3= [];
gdjs._49Code.GDbackgroundObjects1= [];
gdjs._49Code.GDbackgroundObjects2= [];
gdjs._49Code.GDbackgroundObjects3= [];
gdjs._49Code.GDtxtObjects1= [];
gdjs._49Code.GDtxtObjects2= [];
gdjs._49Code.GDtxtObjects3= [];

gdjs._49Code.conditionTrue_0 = {val:false};
gdjs._49Code.condition0IsTrue_0 = {val:false};
gdjs._49Code.condition1IsTrue_0 = {val:false};


gdjs._49Code.eventsList0 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects2);
{for(var i = 0, len = gdjs._49Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects2[i].addPolarForce(270, 70, 0);
}
}{for(var i = 0, len = gdjs._49Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects2[i].setAnimationName("up");
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects2);
{for(var i = 0, len = gdjs._49Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects2[i].addPolarForce(0, 70, 0);
}
}{for(var i = 0, len = gdjs._49Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects2[i].setAnimationName("right");
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects2);
{for(var i = 0, len = gdjs._49Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects2[i].addPolarForce(180, 70, 0);
}
}{for(var i = 0, len = gdjs._49Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects2[i].setAnimationName("left");
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects1);
{for(var i = 0, len = gdjs._49Code.GDbeeObjects1.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects1[i].addPolarForce(90, 70, 0);
}
}{for(var i = 0, len = gdjs._49Code.GDbeeObjects1.length ;i < len;++i) {
    gdjs._49Code.GDbeeObjects1[i].setAnimationName("down");
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects = Hashtable.newFrom({"bee": gdjs._49Code.GDbeeObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower1Objects1Objects = Hashtable.newFrom({"flower1": gdjs._49Code.GDflower1Objects1});gdjs._49Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects1);
gdjs.copyArray(runtimeScene.getObjects("flower1"), gdjs._49Code.GDflower1Objects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower1Objects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDflower1Objects1 */
{runtimeScene.getVariables().get("Score").add(5);
}{for(var i = 0, len = gdjs._49Code.GDflower1Objects1.length ;i < len;++i) {
    gdjs._49Code.GDflower1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects = Hashtable.newFrom({"bee": gdjs._49Code.GDbeeObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower2Objects1Objects = Hashtable.newFrom({"flower2": gdjs._49Code.GDflower2Objects1});gdjs._49Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects1);
gdjs.copyArray(runtimeScene.getObjects("flower2"), gdjs._49Code.GDflower2Objects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower2Objects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDflower2Objects1 */
{runtimeScene.getVariables().get("Score").add(15);
}{for(var i = 0, len = gdjs._49Code.GDflower2Objects1.length ;i < len;++i) {
    gdjs._49Code.GDflower2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects = Hashtable.newFrom({"bee": gdjs._49Code.GDbeeObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower3Objects1Objects = Hashtable.newFrom({"flower3": gdjs._49Code.GDflower3Objects1});gdjs._49Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects1);
gdjs.copyArray(runtimeScene.getObjects("flower3"), gdjs._49Code.GDflower3Objects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower3Objects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDflower3Objects1 */
{runtimeScene.getVariables().get("Score").add(10);
}{for(var i = 0, len = gdjs._49Code.GDflower3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDflower3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects = Hashtable.newFrom({"bee": gdjs._49Code.GDbeeObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower4rareObjects1Objects = Hashtable.newFrom({"flower4rare": gdjs._49Code.GDflower4rareObjects1});gdjs._49Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._49Code.GDbeeObjects1);
gdjs.copyArray(runtimeScene.getObjects("flower4rare"), gdjs._49Code.GDflower4rareObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDbeeObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDflower4rareObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDflower4rareObjects1 */
{runtimeScene.getVariables().get("Score").add(40);
}{for(var i = 0, len = gdjs._49Code.GDflower4rareObjects1.length ;i < len;++i) {
    gdjs._49Code.GDflower4rareObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs._49Code.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("txt"), gdjs._49Code.GDtxtObjects2);
{for(var i = 0, len = gdjs._49Code.GDtxtObjects2.length ;i < len;++i) {
    gdjs._49Code.GDtxtObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txt"), gdjs._49Code.GDtxtObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDtxtObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDtxtObjects1[i].getString() == "Score: 200" ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDtxtObjects1[k] = gdjs._49Code.GDtxtObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDtxtObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}}

}


};gdjs._49Code.eventsList6 = function(runtimeScene) {

{


gdjs._49Code.eventsList0(runtimeScene);
}


{


gdjs._49Code.eventsList1(runtimeScene);
}


{


gdjs._49Code.eventsList2(runtimeScene);
}


{


gdjs._49Code.eventsList3(runtimeScene);
}


{


gdjs._49Code.eventsList4(runtimeScene);
}


{


gdjs._49Code.eventsList5(runtimeScene);
}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDbeeObjects1.length = 0;
gdjs._49Code.GDbeeObjects2.length = 0;
gdjs._49Code.GDbeeObjects3.length = 0;
gdjs._49Code.GDflower1Objects1.length = 0;
gdjs._49Code.GDflower1Objects2.length = 0;
gdjs._49Code.GDflower1Objects3.length = 0;
gdjs._49Code.GDflower2Objects1.length = 0;
gdjs._49Code.GDflower2Objects2.length = 0;
gdjs._49Code.GDflower2Objects3.length = 0;
gdjs._49Code.GDflower3Objects1.length = 0;
gdjs._49Code.GDflower3Objects2.length = 0;
gdjs._49Code.GDflower3Objects3.length = 0;
gdjs._49Code.GDflower4rareObjects1.length = 0;
gdjs._49Code.GDflower4rareObjects2.length = 0;
gdjs._49Code.GDflower4rareObjects3.length = 0;
gdjs._49Code.GDbackgroundObjects1.length = 0;
gdjs._49Code.GDbackgroundObjects2.length = 0;
gdjs._49Code.GDbackgroundObjects3.length = 0;
gdjs._49Code.GDtxtObjects1.length = 0;
gdjs._49Code.GDtxtObjects2.length = 0;
gdjs._49Code.GDtxtObjects3.length = 0;

gdjs._49Code.eventsList6(runtimeScene);
return;

}

gdjs['_49Code'] = gdjs._49Code;
