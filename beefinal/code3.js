gdjs._52Code = {};
gdjs._52Code.forEachIndex2 = 0;

gdjs._52Code.forEachObjects2 = [];

gdjs._52Code.forEachTemporary2 = null;

gdjs._52Code.forEachTotalCount2 = 0;

gdjs._52Code.GDbeeObjects1= [];
gdjs._52Code.GDbeeObjects2= [];
gdjs._52Code.GDbeeObjects3= [];
gdjs._52Code.GDflower1Objects1= [];
gdjs._52Code.GDflower1Objects2= [];
gdjs._52Code.GDflower1Objects3= [];
gdjs._52Code.GDflower2Objects1= [];
gdjs._52Code.GDflower2Objects2= [];
gdjs._52Code.GDflower2Objects3= [];
gdjs._52Code.GDflower3Objects1= [];
gdjs._52Code.GDflower3Objects2= [];
gdjs._52Code.GDflower3Objects3= [];
gdjs._52Code.GDflower4rareObjects1= [];
gdjs._52Code.GDflower4rareObjects2= [];
gdjs._52Code.GDflower4rareObjects3= [];
gdjs._52Code.GDbackgroundObjects1= [];
gdjs._52Code.GDbackgroundObjects2= [];
gdjs._52Code.GDbackgroundObjects3= [];
gdjs._52Code.GDtxtObjects1= [];
gdjs._52Code.GDtxtObjects2= [];
gdjs._52Code.GDtxtObjects3= [];
gdjs._52Code.GDwintxtObjects1= [];
gdjs._52Code.GDwintxtObjects2= [];
gdjs._52Code.GDwintxtObjects3= [];
gdjs._52Code.GDflower5dieObjects1= [];
gdjs._52Code.GDflower5dieObjects2= [];
gdjs._52Code.GDflower5dieObjects3= [];
gdjs._52Code.GDExplosionObjects1= [];
gdjs._52Code.GDExplosionObjects2= [];
gdjs._52Code.GDExplosionObjects3= [];

gdjs._52Code.conditionTrue_0 = {val:false};
gdjs._52Code.condition0IsTrue_0 = {val:false};
gdjs._52Code.condition1IsTrue_0 = {val:false};


gdjs._52Code.eventsList0 = function(runtimeScene) {

{


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
{for(var i = 0, len = gdjs._52Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects2[i].addPolarForce(270, 120, 0);
}
}{for(var i = 0, len = gdjs._52Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects2[i].setAnimationName("up");
}
}}

}


{


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
{for(var i = 0, len = gdjs._52Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects2[i].addPolarForce(90, 120, 0);
}
}{for(var i = 0, len = gdjs._52Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects2[i].setAnimationName("down");
}
}}

}


{


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
{for(var i = 0, len = gdjs._52Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects2[i].addPolarForce(180, 120, 0);
}
}{for(var i = 0, len = gdjs._52Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects2[i].setAnimationName("left");
}
}}

}


{


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects1);
{for(var i = 0, len = gdjs._52Code.GDbeeObjects1.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects1[i].addPolarForce(0, 120, 0);
}
}{for(var i = 0, len = gdjs._52Code.GDbeeObjects1.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects1[i].setAnimationName("right");
}
}}

}


};gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower5dieObjects1Objects = Hashtable.newFrom({"flower5die": gdjs._52Code.GDflower5dieObjects1});gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower5dieObjects2Objects = Hashtable.newFrom({"flower5die": gdjs._52Code.GDflower5dieObjects2});gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects = Hashtable.newFrom({"bee": gdjs._52Code.GDbeeObjects2});gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs._52Code.GDExplosionObjects2});gdjs._52Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
gdjs.copyArray(gdjs._52Code.GDflower5dieObjects1, gdjs._52Code.GDflower5dieObjects2);


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower5dieObjects2Objects, gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects, false, runtimeScene, false);
}if (gdjs._52Code.condition0IsTrue_0.val) {
/* Reuse gdjs._52Code.GDbeeObjects2 */
gdjs._52Code.GDExplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDExplosionObjects2Objects, (( gdjs._52Code.GDbeeObjects2.length === 0 ) ? 0 :gdjs._52Code.GDbeeObjects2[0].getPointX("")), (( gdjs._52Code.GDbeeObjects2.length === 0 ) ? 0 :gdjs._52Code.GDbeeObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs._52Code.GDbeeObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbeeObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "a");
}}

}


{


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 0.5;
}if (gdjs._52Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "a");
}}

}


};gdjs._52Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("txt"), gdjs._52Code.GDtxtObjects2);
{for(var i = 0, len = gdjs._52Code.GDtxtObjects2.length ;i < len;++i) {
    gdjs._52Code.GDtxtObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("txt"), gdjs._52Code.GDtxtObjects2);

gdjs._52Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52Code.GDtxtObjects2.length;i<l;++i) {
    if ( gdjs._52Code.GDtxtObjects2[i].getString() == "Score: 3000" ) {
        gdjs._52Code.condition0IsTrue_0.val = true;
        gdjs._52Code.GDtxtObjects2[k] = gdjs._52Code.GDtxtObjects2[i];
        ++k;
    }
}
gdjs._52Code.GDtxtObjects2.length = k;}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("wintxt"), gdjs._52Code.GDwintxtObjects2);
{for(var i = 0, len = gdjs._52Code.GDwintxtObjects2.length ;i < len;++i) {
    gdjs._52Code.GDwintxtObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("wintxt"), gdjs._52Code.GDwintxtObjects1);

gdjs._52Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._52Code.GDwintxtObjects1.length;i<l;++i) {
    if ( gdjs._52Code.GDwintxtObjects1[i].isVisible() ) {
        gdjs._52Code.condition0IsTrue_0.val = true;
        gdjs._52Code.GDwintxtObjects1[k] = gdjs._52Code.GDwintxtObjects1[i];
        ++k;
    }
}
gdjs._52Code.GDwintxtObjects1.length = k;}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs._52Code.GDflower5dieObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower5dieObjects1Objects, 384, 318, "");
}
{ //Subevents
gdjs._52Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects = Hashtable.newFrom({"bee": gdjs._52Code.GDbeeObjects2});gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower1Objects2Objects = Hashtable.newFrom({"flower1": gdjs._52Code.GDflower1Objects2});gdjs._52Code.eventsList3 = function(runtimeScene) {

};gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects = Hashtable.newFrom({"bee": gdjs._52Code.GDbeeObjects2});gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower2Objects2Objects = Hashtable.newFrom({"flower2": gdjs._52Code.GDflower2Objects2});gdjs._52Code.eventsList4 = function(runtimeScene) {

};gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects = Hashtable.newFrom({"bee": gdjs._52Code.GDbeeObjects2});gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower3Objects2Objects = Hashtable.newFrom({"flower3": gdjs._52Code.GDflower3Objects2});gdjs._52Code.eventsList5 = function(runtimeScene) {

};gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects = Hashtable.newFrom({"bee": gdjs._52Code.GDbeeObjects2});gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower4rareObjects2Objects = Hashtable.newFrom({"flower4rare": gdjs._52Code.GDflower4rareObjects2});gdjs._52Code.eventsList6 = function(runtimeScene) {

};gdjs._52Code.eventsList7 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("wintxt"), gdjs._52Code.GDwintxtObjects1);
{for(var i = 0, len = gdjs._52Code.GDwintxtObjects1.length ;i < len;++i) {
    gdjs._52Code.GDwintxtObjects1[i].hide();
}
}}

}


{


{
}

}


{


gdjs._52Code.eventsList0(runtimeScene);
}


{


gdjs._52Code.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("flower1"), gdjs._52Code.GDflower1Objects1);

for(gdjs._52Code.forEachIndex2 = 0;gdjs._52Code.forEachIndex2 < gdjs._52Code.GDflower1Objects1.length;++gdjs._52Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
gdjs._52Code.GDflower1Objects2.length = 0;


gdjs._52Code.forEachTemporary2 = gdjs._52Code.GDflower1Objects1[gdjs._52Code.forEachIndex2];
gdjs._52Code.GDflower1Objects2.push(gdjs._52Code.forEachTemporary2);
gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects, gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower1Objects2Objects, false, runtimeScene, false);
}if (gdjs._52Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").add(5);
}{for(var i = 0, len = gdjs._52Code.GDflower1Objects2.length ;i < len;++i) {
    gdjs._52Code.GDflower1Objects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("flower2"), gdjs._52Code.GDflower2Objects1);

for(gdjs._52Code.forEachIndex2 = 0;gdjs._52Code.forEachIndex2 < gdjs._52Code.GDflower2Objects1.length;++gdjs._52Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
gdjs._52Code.GDflower2Objects2.length = 0;


gdjs._52Code.forEachTemporary2 = gdjs._52Code.GDflower2Objects1[gdjs._52Code.forEachIndex2];
gdjs._52Code.GDflower2Objects2.push(gdjs._52Code.forEachTemporary2);
gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects, gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower2Objects2Objects, false, runtimeScene, false);
}if (gdjs._52Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").add(15);
}{for(var i = 0, len = gdjs._52Code.GDflower2Objects2.length ;i < len;++i) {
    gdjs._52Code.GDflower2Objects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("flower3"), gdjs._52Code.GDflower3Objects1);

for(gdjs._52Code.forEachIndex2 = 0;gdjs._52Code.forEachIndex2 < gdjs._52Code.GDflower3Objects1.length;++gdjs._52Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
gdjs._52Code.GDflower3Objects2.length = 0;


gdjs._52Code.forEachTemporary2 = gdjs._52Code.GDflower3Objects1[gdjs._52Code.forEachIndex2];
gdjs._52Code.GDflower3Objects2.push(gdjs._52Code.forEachTemporary2);
gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects, gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower3Objects2Objects, false, runtimeScene, false);
}if (gdjs._52Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").add(10);
}{for(var i = 0, len = gdjs._52Code.GDflower3Objects2.length ;i < len;++i) {
    gdjs._52Code.GDflower3Objects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("flower4rare"), gdjs._52Code.GDflower4rareObjects1);

for(gdjs._52Code.forEachIndex2 = 0;gdjs._52Code.forEachIndex2 < gdjs._52Code.GDflower4rareObjects1.length;++gdjs._52Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("bee"), gdjs._52Code.GDbeeObjects2);
gdjs._52Code.GDflower4rareObjects2.length = 0;


gdjs._52Code.forEachTemporary2 = gdjs._52Code.GDflower4rareObjects1[gdjs._52Code.forEachIndex2];
gdjs._52Code.GDflower4rareObjects2.push(gdjs._52Code.forEachTemporary2);
gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDbeeObjects2Objects, gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDflower4rareObjects2Objects, false, runtimeScene, false);
}if (gdjs._52Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score").add(40);
}{for(var i = 0, len = gdjs._52Code.GDflower4rareObjects2.length ;i < len;++i) {
    gdjs._52Code.GDflower4rareObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};

gdjs._52Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52Code.GDbeeObjects1.length = 0;
gdjs._52Code.GDbeeObjects2.length = 0;
gdjs._52Code.GDbeeObjects3.length = 0;
gdjs._52Code.GDflower1Objects1.length = 0;
gdjs._52Code.GDflower1Objects2.length = 0;
gdjs._52Code.GDflower1Objects3.length = 0;
gdjs._52Code.GDflower2Objects1.length = 0;
gdjs._52Code.GDflower2Objects2.length = 0;
gdjs._52Code.GDflower2Objects3.length = 0;
gdjs._52Code.GDflower3Objects1.length = 0;
gdjs._52Code.GDflower3Objects2.length = 0;
gdjs._52Code.GDflower3Objects3.length = 0;
gdjs._52Code.GDflower4rareObjects1.length = 0;
gdjs._52Code.GDflower4rareObjects2.length = 0;
gdjs._52Code.GDflower4rareObjects3.length = 0;
gdjs._52Code.GDbackgroundObjects1.length = 0;
gdjs._52Code.GDbackgroundObjects2.length = 0;
gdjs._52Code.GDbackgroundObjects3.length = 0;
gdjs._52Code.GDtxtObjects1.length = 0;
gdjs._52Code.GDtxtObjects2.length = 0;
gdjs._52Code.GDtxtObjects3.length = 0;
gdjs._52Code.GDwintxtObjects1.length = 0;
gdjs._52Code.GDwintxtObjects2.length = 0;
gdjs._52Code.GDwintxtObjects3.length = 0;
gdjs._52Code.GDflower5dieObjects1.length = 0;
gdjs._52Code.GDflower5dieObjects2.length = 0;
gdjs._52Code.GDflower5dieObjects3.length = 0;
gdjs._52Code.GDExplosionObjects1.length = 0;
gdjs._52Code.GDExplosionObjects2.length = 0;
gdjs._52Code.GDExplosionObjects3.length = 0;

gdjs._52Code.eventsList7(runtimeScene);
return;

}

gdjs['_52Code'] = gdjs._52Code;
