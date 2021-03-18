/***************** 
 * Retrocue Test *
 *****************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Retrocue';  // from the Builder filename that created this script
let expInfo = {'Participant initials*': '', 'Session': '001', 'Age*': '', 'Assigned sex at birth*': '', 'Dominant hand*': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
const instructionLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructionLoopLoopBegin, instructionLoopLoopScheduler);
flowScheduler.add(instructionLoopLoopScheduler);
flowScheduler.add(instructionLoopLoopEnd);
const trials_InstrLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_InstrLoopBegin, trials_InstrLoopScheduler);
flowScheduler.add(trials_InstrLoopScheduler);
flowScheduler.add(trials_InstrLoopEnd);
const repeat_InstrTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_InstrTrialsLoopBegin, repeat_InstrTrialsLoopScheduler);
flowScheduler.add(repeat_InstrTrialsLoopScheduler);
flowScheduler.add(repeat_InstrTrialsLoopEnd);
const runsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(runsLoopBegin, runsLoopScheduler);
flowScheduler.add(runsLoopScheduler);
flowScheduler.add(runsLoopEnd);
flowScheduler.add(finalRoutineRoutineBegin());
flowScheduler.add(finalRoutineRoutineEachFrame());
flowScheduler.add(finalRoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/id111_v1_so.jpg', 'path': 'images/id111_v1_so.jpg'},
    {'name': 'images/id113_v1_so.jpg', 'path': 'images/id113_v1_so.jpg'},
    {'name': 'images/id080_v1_si.jpg', 'path': 'images/id080_v1_si.jpg'},
    {'name': 'scrambles/id014_v1_fm.jpg', 'path': 'scrambles/id014_v1_fm.jpg'},
    {'name': 'images/id110_v1_so.jpg', 'path': 'images/id110_v1_so.jpg'},
    {'name': 'scrambles/id113_v1_so.jpg', 'path': 'scrambles/id113_v1_so.jpg'},
    {'name': 'scrambles/id001_v1_fm.jpg', 'path': 'scrambles/id001_v1_fm.jpg'},
    {'name': 'scrambles/id065_v1_ff.jpg', 'path': 'scrambles/id065_v1_ff.jpg'},
    {'name': 'images/id117_v1_so.jpg', 'path': 'images/id117_v1_so.jpg'},
    {'name': 'images/id014_v1_fm.jpg', 'path': 'images/id014_v1_fm.jpg'},
    {'name': 'images/id093_v1_si.jpg', 'path': 'images/id093_v1_si.jpg'},
    {'name': 'scrambles/id010_v1_fm.jpg', 'path': 'scrambles/id010_v1_fm.jpg'},
    {'name': 'images/id001_v1_fm.jpg', 'path': 'images/id001_v1_fm.jpg'},
    {'name': 'scrambles/id092_v1_si.jpg', 'path': 'scrambles/id092_v1_si.jpg'},
    {'name': 'scrambles/id100_v1_si.jpg', 'path': 'scrambles/id100_v1_si.jpg'},
    {'name': 'images/id042_v1_ff.jpg', 'path': 'images/id042_v1_ff.jpg'},
    {'name': 'images/id074_v1_si.jpg', 'path': 'images/id074_v1_si.jpg'},
    {'name': 'scrambles/id086_v1_si.jpg', 'path': 'scrambles/id086_v1_si.jpg'},
    {'name': 'images/id030_v1_fm.jpg', 'path': 'images/id030_v1_fm.jpg'},
    {'name': 'scrambles/id104_v1_si.jpg', 'path': 'scrambles/id104_v1_si.jpg'},
    {'name': 'scrambles/id042_v1_ff.jpg', 'path': 'scrambles/id042_v1_ff.jpg'},
    {'name': 'images/id059_v1_ff.jpg', 'path': 'images/id059_v1_ff.jpg'},
    {'name': 'images/id073_v1_si.jpg', 'path': 'images/id073_v1_si.jpg'},
    {'name': 'scrambles/id130_v1_so.jpg', 'path': 'scrambles/id130_v1_so.jpg'},
    {'name': 'scrambles/id030_v1_fm.jpg', 'path': 'scrambles/id030_v1_fm.jpg'},
    {'name': 'images/id091_v1_si.jpg', 'path': 'images/id091_v1_si.jpg'},
    {'name': 'trials_1.xlsx', 'path': 'trials_1.xlsx'},
    {'name': 'scrambles/id074_v1_si.jpg', 'path': 'scrambles/id074_v1_si.jpg'},
    {'name': 'scrambles/id018_v1_fm.jpg', 'path': 'scrambles/id018_v1_fm.jpg'},
    {'name': 'scrambles/id102_v1_si.jpg', 'path': 'scrambles/id102_v1_si.jpg'},
    {'name': 'scrambles/id085_v1_si.jpg', 'path': 'scrambles/id085_v1_si.jpg'},
    {'name': 'images/id075_v1_si.jpg', 'path': 'images/id075_v1_si.jpg'},
    {'name': 'scrambles/id112_v1_so.jpg', 'path': 'scrambles/id112_v1_so.jpg'},
    {'name': 'images/id057_v1_ff.jpg', 'path': 'images/id057_v1_ff.jpg'},
    {'name': 'scrambles/id035_v1_fm.jpg', 'path': 'scrambles/id035_v1_fm.jpg'},
    {'name': 'scrambles/id057_v1_ff.jpg', 'path': 'scrambles/id057_v1_ff.jpg'},
    {'name': 'images/id012_v1_fm.jpg', 'path': 'images/id012_v1_fm.jpg'},
    {'name': 'images/id109_v1_so.jpg', 'path': 'images/id109_v1_so.jpg'},
    {'name': 'images/id070_v1_ff.jpg', 'path': 'images/id070_v1_ff.jpg'},
    {'name': 'scrambles/id043_v1_ff.jpg', 'path': 'scrambles/id043_v1_ff.jpg'},
    {'name': 'images/id028_v1_fm.jpg', 'path': 'images/id028_v1_fm.jpg'},
    {'name': 'scrambles/id053_v1_ff.jpg', 'path': 'scrambles/id053_v1_ff.jpg'},
    {'name': 'scrambles/id128_v1_so.jpg', 'path': 'scrambles/id128_v1_so.jpg'},
    {'name': 'scrambles/id134_v1_so.jpg', 'path': 'scrambles/id134_v1_so.jpg'},
    {'name': 'images/id040_v1_ff.jpg', 'path': 'images/id040_v1_ff.jpg'},
    {'name': 'instructionTxt.xlsx', 'path': 'instructionTxt.xlsx'},
    {'name': 'images/id002_v1_fm.jpg', 'path': 'images/id002_v1_fm.jpg'},
    {'name': 'scrambles/id047_v1_ff.jpg', 'path': 'scrambles/id047_v1_ff.jpg'},
    {'name': 'scrambles/id032_v1_fm.jpg', 'path': 'scrambles/id032_v1_fm.jpg'},
    {'name': 'scrambles/id125_v1_so.jpg', 'path': 'scrambles/id125_v1_so.jpg'},
    {'name': 'scrambles/id095_v1_si.jpg', 'path': 'scrambles/id095_v1_si.jpg'},
    {'name': 'scrambles/id020_v1_fm.jpg', 'path': 'scrambles/id020_v1_fm.jpg'},
    {'name': 'images/id027_v1_fm.jpg', 'path': 'images/id027_v1_fm.jpg'},
    {'name': 'scrambles/id062_v1_ff.jpg', 'path': 'scrambles/id062_v1_ff.jpg'},
    {'name': 'images/id082_v1_si.jpg', 'path': 'images/id082_v1_si.jpg'},
    {'name': 'images/id065_v1_ff.jpg', 'path': 'images/id065_v1_ff.jpg'},
    {'name': 'images/id049_v1_ff.jpg', 'path': 'images/id049_v1_ff.jpg'},
    {'name': 'scrambles/id009_v1_fm.jpg', 'path': 'scrambles/id009_v1_fm.jpg'},
    {'name': 'scrambles/id087_v1_si.jpg', 'path': 'scrambles/id087_v1_si.jpg'},
    {'name': 'images/id046_v1_ff.jpg', 'path': 'images/id046_v1_ff.jpg'},
    {'name': 'scrambles/id083_v1_si.jpg', 'path': 'scrambles/id083_v1_si.jpg'},
    {'name': 'scrambles/id031_v1_fm.jpg', 'path': 'scrambles/id031_v1_fm.jpg'},
    {'name': 'scrambles/id076_v1_si.jpg', 'path': 'scrambles/id076_v1_si.jpg'},
    {'name': 'images/id013_v1_fm.jpg', 'path': 'images/id013_v1_fm.jpg'},
    {'name': 'scrambles/id033_v1_fm.jpg', 'path': 'scrambles/id033_v1_fm.jpg'},
    {'name': 'images/id103_v1_si.jpg', 'path': 'images/id103_v1_si.jpg'},
    {'name': 'images/id034_v1_fm.jpg', 'path': 'images/id034_v1_fm.jpg'},
    {'name': 'images/id096_v1_si.jpg', 'path': 'images/id096_v1_si.jpg'},
    {'name': 'images/id031_v1_fm.jpg', 'path': 'images/id031_v1_fm.jpg'},
    {'name': 'images/id139_v1_so.jpg', 'path': 'images/id139_v1_so.jpg'},
    {'name': 'scrambles/id054_v1_ff.jpg', 'path': 'scrambles/id054_v1_ff.jpg'},
    {'name': 'scrambles/id052_v1_ff.jpg', 'path': 'scrambles/id052_v1_ff.jpg'},
    {'name': 'scrambles/id028_v1_fm.jpg', 'path': 'scrambles/id028_v1_fm.jpg'},
    {'name': 'scrambles/id126_v1_so.jpg', 'path': 'scrambles/id126_v1_so.jpg'},
    {'name': 'images/id124_v1_so.jpg', 'path': 'images/id124_v1_so.jpg'},
    {'name': 'scrambles/id091_v1_si.jpg', 'path': 'scrambles/id091_v1_si.jpg'},
    {'name': 'trials_4.xlsx', 'path': 'trials_4.xlsx'},
    {'name': 'scrambles/id008_v1_fm.jpg', 'path': 'scrambles/id008_v1_fm.jpg'},
    {'name': 'images/id038_v1_ff.jpg', 'path': 'images/id038_v1_ff.jpg'},
    {'name': 'images/id071_v1_si.jpg', 'path': 'images/id071_v1_si.jpg'},
    {'name': 'scrambles/id114_v1_so.jpg', 'path': 'scrambles/id114_v1_so.jpg'},
    {'name': 'images/id052_v1_ff.jpg', 'path': 'images/id052_v1_ff.jpg'},
    {'name': 'images/id061_v1_ff.jpg', 'path': 'images/id061_v1_ff.jpg'},
    {'name': 'scrambles/id135_v1_so.jpg', 'path': 'scrambles/id135_v1_so.jpg'},
    {'name': 'scrambles/id046_v1_ff.jpg', 'path': 'scrambles/id046_v1_ff.jpg'},
    {'name': 'scrambles/id096_v1_si.jpg', 'path': 'scrambles/id096_v1_si.jpg'},
    {'name': 'images/id022_v1_fm.jpg', 'path': 'images/id022_v1_fm.jpg'},
    {'name': 'scrambles/id070_v1_ff.jpg', 'path': 'scrambles/id070_v1_ff.jpg'},
    {'name': 'images/id029_v1_fm.jpg', 'path': 'images/id029_v1_fm.jpg'},
    {'name': 'images/id048_v1_ff.jpg', 'path': 'images/id048_v1_ff.jpg'},
    {'name': 'images/id108_v1_so.jpg', 'path': 'images/id108_v1_so.jpg'},
    {'name': 'scrambles/id011_v1_fm.jpg', 'path': 'scrambles/id011_v1_fm.jpg'},
    {'name': 'images/id039_v1_ff.jpg', 'path': 'images/id039_v1_ff.jpg'},
    {'name': 'images/id123_v1_so.jpg', 'path': 'images/id123_v1_so.jpg'},
    {'name': 'scrambles/id012_v1_fm.jpg', 'path': 'scrambles/id012_v1_fm.jpg'},
    {'name': 'scrambles/id101_v1_si.jpg', 'path': 'scrambles/id101_v1_si.jpg'},
    {'name': 'scrambles/id117_v1_so.jpg', 'path': 'scrambles/id117_v1_so.jpg'},
    {'name': 'scrambles/id044_v1_ff.jpg', 'path': 'scrambles/id044_v1_ff.jpg'},
    {'name': 'scrambles/id027_v1_fm.jpg', 'path': 'scrambles/id027_v1_fm.jpg'},
    {'name': 'images/id102_v1_si.jpg', 'path': 'images/id102_v1_si.jpg'},
    {'name': 'scrambles/id063_v1_ff.jpg', 'path': 'scrambles/id063_v1_ff.jpg'},
    {'name': 'images/id086_v1_si.jpg', 'path': 'images/id086_v1_si.jpg'},
    {'name': 'scrambles/id002_v1_fm.jpg', 'path': 'scrambles/id002_v1_fm.jpg'},
    {'name': 'scrambles/id064_v1_ff.jpg', 'path': 'scrambles/id064_v1_ff.jpg'},
    {'name': 'scrambles/id072_v1_si.jpg', 'path': 'scrambles/id072_v1_si.jpg'},
    {'name': 'scrambles/id082_v1_si.jpg', 'path': 'scrambles/id082_v1_si.jpg'},
    {'name': 'scrambles/id107_v1_so.jpg', 'path': 'scrambles/id107_v1_so.jpg'},
    {'name': 'scrambles/id069_v1_ff.jpg', 'path': 'scrambles/id069_v1_ff.jpg'},
    {'name': 'scrambles/id097_v1_si.jpg', 'path': 'scrambles/id097_v1_si.jpg'},
    {'name': 'images/id010_v1_fm.jpg', 'path': 'images/id010_v1_fm.jpg'},
    {'name': 'images/id051_v1_ff.jpg', 'path': 'images/id051_v1_ff.jpg'},
    {'name': 'scrambles/id006_v1_fm.jpg', 'path': 'scrambles/id006_v1_fm.jpg'},
    {'name': 'scrambles/id116_v1_so.jpg', 'path': 'scrambles/id116_v1_so.jpg'},
    {'name': 'scrambles/id045_v1_ff.jpg', 'path': 'scrambles/id045_v1_ff.jpg'},
    {'name': 'scrambles/id022_v1_fm.jpg', 'path': 'scrambles/id022_v1_fm.jpg'},
    {'name': 'trials_3.xlsx', 'path': 'trials_3.xlsx'},
    {'name': 'images/id115_v1_so.jpg', 'path': 'images/id115_v1_so.jpg'},
    {'name': 'scrambles/id029_v1_fm.jpg', 'path': 'scrambles/id029_v1_fm.jpg'},
    {'name': 'images/id140_v1_so.jpg', 'path': 'images/id140_v1_so.jpg'},
    {'name': 'scrambles/id023_v1_fm.jpg', 'path': 'scrambles/id023_v1_fm.jpg'},
    {'name': 'images/id050_v1_ff.jpg', 'path': 'images/id050_v1_ff.jpg'},
    {'name': 'images/id004_v1_fm.jpg', 'path': 'images/id004_v1_fm.jpg'},
    {'name': 'scrambles/id121_v1_so.jpg', 'path': 'scrambles/id121_v1_so.jpg'},
    {'name': 'images/id047_v1_ff.jpg', 'path': 'images/id047_v1_ff.jpg'},
    {'name': 'images/id035_v1_fm.jpg', 'path': 'images/id035_v1_fm.jpg'},
    {'name': 'images/id003_v1_fm.jpg', 'path': 'images/id003_v1_fm.jpg'},
    {'name': 'scrambles/id094_v1_si.jpg', 'path': 'scrambles/id094_v1_si.jpg'},
    {'name': 'scrambles/id059_v1_ff.jpg', 'path': 'scrambles/id059_v1_ff.jpg'},
    {'name': 'images/id062_v1_ff.jpg', 'path': 'images/id062_v1_ff.jpg'},
    {'name': 'scrambles/id051_v1_ff.jpg', 'path': 'scrambles/id051_v1_ff.jpg'},
    {'name': 'scrambles/id038_v1_ff.jpg', 'path': 'scrambles/id038_v1_ff.jpg'},
    {'name': 'scrambles/id140_v1_so.jpg', 'path': 'scrambles/id140_v1_so.jpg'},
    {'name': 'images/id135_v1_so.jpg', 'path': 'images/id135_v1_so.jpg'},
    {'name': 'images/id041_v1_ff.jpg', 'path': 'images/id041_v1_ff.jpg'},
    {'name': 'scrambles/id138_v1_so.jpg', 'path': 'scrambles/id138_v1_so.jpg'},
    {'name': 'images/id126_v1_so.jpg', 'path': 'images/id126_v1_so.jpg'},
    {'name': 'images/id054_v1_ff.jpg', 'path': 'images/id054_v1_ff.jpg'},
    {'name': 'images/id018_v1_fm.jpg', 'path': 'images/id018_v1_fm.jpg'},
    {'name': 'scrambles/id004_v1_fm.jpg', 'path': 'scrambles/id004_v1_fm.jpg'},
    {'name': 'images/id067_v1_ff.jpg', 'path': 'images/id067_v1_ff.jpg'},
    {'name': 'scrambles/id079_v1_si.jpg', 'path': 'scrambles/id079_v1_si.jpg'},
    {'name': 'images/id077_v1_si.jpg', 'path': 'images/id077_v1_si.jpg'},
    {'name': 'trials_2.xlsx', 'path': 'trials_2.xlsx'},
    {'name': 'scrambles/id129_v1_so.jpg', 'path': 'scrambles/id129_v1_so.jpg'},
    {'name': 'scrambles/id084_v1_si.jpg', 'path': 'scrambles/id084_v1_si.jpg'},
    {'name': 'images/id017_v1_fm.jpg', 'path': 'images/id017_v1_fm.jpg'},
    {'name': 'images/id069_v1_ff.jpg', 'path': 'images/id069_v1_ff.jpg'},
    {'name': 'images/id006_v1_fm.jpg', 'path': 'images/id006_v1_fm.jpg'},
    {'name': 'scrambles/id075_v1_si.jpg', 'path': 'scrambles/id075_v1_si.jpg'},
    {'name': 'scrambles/id122_v1_so.jpg', 'path': 'scrambles/id122_v1_so.jpg'},
    {'name': 'images/id088_v1_si.jpg', 'path': 'images/id088_v1_si.jpg'},
    {'name': 'scrambles/id078_v1_si.jpg', 'path': 'scrambles/id078_v1_si.jpg'},
    {'name': 'scrambles/id119_v1_so.jpg', 'path': 'scrambles/id119_v1_so.jpg'},
    {'name': 'scrambles/id132_v1_so.jpg', 'path': 'scrambles/id132_v1_so.jpg'},
    {'name': 'images/id095_v1_si.jpg', 'path': 'images/id095_v1_si.jpg'},
    {'name': 'images/id119_v1_so.jpg', 'path': 'images/id119_v1_so.jpg'},
    {'name': 'scrambles/id089_v1_si.jpg', 'path': 'scrambles/id089_v1_si.jpg'},
    {'name': 'images/id009_v1_fm.jpg', 'path': 'images/id009_v1_fm.jpg'},
    {'name': 'scrambles/id007_v1_fm.jpg', 'path': 'scrambles/id007_v1_fm.jpg'},
    {'name': 'images/id090_v1_si.jpg', 'path': 'images/id090_v1_si.jpg'},
    {'name': 'images/id056_v1_ff.jpg', 'path': 'images/id056_v1_ff.jpg'},
    {'name': 'scrambles/id137_v1_so.jpg', 'path': 'scrambles/id137_v1_so.jpg'},
    {'name': 'scrambles/id021_v1_fm.jpg', 'path': 'scrambles/id021_v1_fm.jpg'},
    {'name': 'images/id122_v1_so.jpg', 'path': 'images/id122_v1_so.jpg'},
    {'name': 'images/id024_v1_fm.jpg', 'path': 'images/id024_v1_fm.jpg'},
    {'name': 'scrambles/id139_v1_so.jpg', 'path': 'scrambles/id139_v1_so.jpg'},
    {'name': 'images/id026_v1_fm.jpg', 'path': 'images/id026_v1_fm.jpg'},
    {'name': 'images/id066_v1_ff.jpg', 'path': 'images/id066_v1_ff.jpg'},
    {'name': 'images/id008_v1_fm.jpg', 'path': 'images/id008_v1_fm.jpg'},
    {'name': 'images/id099_v1_si.jpg', 'path': 'images/id099_v1_si.jpg'},
    {'name': 'images/id044_v1_ff.jpg', 'path': 'images/id044_v1_ff.jpg'},
    {'name': 'images/id081_v1_si.jpg', 'path': 'images/id081_v1_si.jpg'},
    {'name': 'scrambles/id088_v1_si.jpg', 'path': 'scrambles/id088_v1_si.jpg'},
    {'name': 'scrambles/id068_v1_ff.jpg', 'path': 'scrambles/id068_v1_ff.jpg'},
    {'name': 'images/id032_v1_fm.jpg', 'path': 'images/id032_v1_fm.jpg'},
    {'name': 'scrambles/id048_v1_ff.jpg', 'path': 'scrambles/id048_v1_ff.jpg'},
    {'name': 'images/id083_v1_si.jpg', 'path': 'images/id083_v1_si.jpg'},
    {'name': 'scrambles/id066_v1_ff.jpg', 'path': 'scrambles/id066_v1_ff.jpg'},
    {'name': 'images/id120_v1_so.jpg', 'path': 'images/id120_v1_so.jpg'},
    {'name': 'scrambles/id058_v1_ff.jpg', 'path': 'scrambles/id058_v1_ff.jpg'},
    {'name': 'scrambles/id025_v1_fm.jpg', 'path': 'scrambles/id025_v1_fm.jpg'},
    {'name': 'scrambles/id040_v1_ff.jpg', 'path': 'scrambles/id040_v1_ff.jpg'},
    {'name': 'images/id133_v1_so.jpg', 'path': 'images/id133_v1_so.jpg'},
    {'name': 'images/id097_v1_si.jpg', 'path': 'images/id097_v1_si.jpg'},
    {'name': 'scrambles/id013_v1_fm.jpg', 'path': 'scrambles/id013_v1_fm.jpg'},
    {'name': 'images/id092_v1_si.jpg', 'path': 'images/id092_v1_si.jpg'},
    {'name': 'images/id114_v1_so.jpg', 'path': 'images/id114_v1_so.jpg'},
    {'name': 'images/id138_v1_so.jpg', 'path': 'images/id138_v1_so.jpg'},
    {'name': 'images/id112_v1_so.jpg', 'path': 'images/id112_v1_so.jpg'},
    {'name': 'images/id019_v1_fm.jpg', 'path': 'images/id019_v1_fm.jpg'},
    {'name': 'scrambles/id067_v1_ff.jpg', 'path': 'scrambles/id067_v1_ff.jpg'},
    {'name': 'images/id085_v1_si.jpg', 'path': 'images/id085_v1_si.jpg'},
    {'name': 'scrambles/id077_v1_si.jpg', 'path': 'scrambles/id077_v1_si.jpg'},
    {'name': 'images/id127_v1_so.jpg', 'path': 'images/id127_v1_so.jpg'},
    {'name': 'scrambles/id105_v1_si.jpg', 'path': 'scrambles/id105_v1_si.jpg'},
    {'name': 'images/id033_v1_fm.jpg', 'path': 'images/id033_v1_fm.jpg'},
    {'name': 'images/id053_v1_ff.jpg', 'path': 'images/id053_v1_ff.jpg'},
    {'name': 'scrambles/id049_v1_ff.jpg', 'path': 'scrambles/id049_v1_ff.jpg'},
    {'name': 'scrambles/id039_v1_ff.jpg', 'path': 'scrambles/id039_v1_ff.jpg'},
    {'name': 'scrambles/id061_v1_ff.jpg', 'path': 'scrambles/id061_v1_ff.jpg'},
    {'name': 'images/id043_v1_ff.jpg', 'path': 'images/id043_v1_ff.jpg'},
    {'name': 'scrambles/id019_v1_fm.jpg', 'path': 'scrambles/id019_v1_fm.jpg'},
    {'name': 'images/id023_v1_fm.jpg', 'path': 'images/id023_v1_fm.jpg'},
    {'name': 'images/id005_v1_fm.jpg', 'path': 'images/id005_v1_fm.jpg'},
    {'name': 'images/id021_v1_fm.jpg', 'path': 'images/id021_v1_fm.jpg'},
    {'name': 'images/id131_v1_so.jpg', 'path': 'images/id131_v1_so.jpg'},
    {'name': 'scrambles/id111_v1_so.jpg', 'path': 'scrambles/id111_v1_so.jpg'},
    {'name': 'images/id045_v1_ff.jpg', 'path': 'images/id045_v1_ff.jpg'},
    {'name': 'scrambles/id110_v1_so.jpg', 'path': 'scrambles/id110_v1_so.jpg'},
    {'name': 'scrambles/id036_v1_ff.jpg', 'path': 'scrambles/id036_v1_ff.jpg'},
    {'name': 'images/id064_v1_ff.jpg', 'path': 'images/id064_v1_ff.jpg'},
    {'name': 'images/id011_v1_fm.jpg', 'path': 'images/id011_v1_fm.jpg'},
    {'name': 'images/id016_v1_fm.jpg', 'path': 'images/id016_v1_fm.jpg'},
    {'name': 'scrambles/id120_v1_so.jpg', 'path': 'scrambles/id120_v1_so.jpg'},
    {'name': 'scrambles/id034_v1_fm.jpg', 'path': 'scrambles/id034_v1_fm.jpg'},
    {'name': 'images/id078_v1_si.jpg', 'path': 'images/id078_v1_si.jpg'},
    {'name': 'images/id116_v1_so.jpg', 'path': 'images/id116_v1_so.jpg'},
    {'name': 'scrambles/id103_v1_si.jpg', 'path': 'scrambles/id103_v1_si.jpg'},
    {'name': 'images/id060_v1_ff.jpg', 'path': 'images/id060_v1_ff.jpg'},
    {'name': 'scrambles/id017_v1_fm.jpg', 'path': 'scrambles/id017_v1_fm.jpg'},
    {'name': 'images/id128_v1_so.jpg', 'path': 'images/id128_v1_so.jpg'},
    {'name': 'images/id076_v1_si.jpg', 'path': 'images/id076_v1_si.jpg'},
    {'name': 'images/id055_v1_ff.jpg', 'path': 'images/id055_v1_ff.jpg'},
    {'name': 'scrambles/id016_v1_fm.jpg', 'path': 'scrambles/id016_v1_fm.jpg'},
    {'name': 'scrambles/id024_v1_fm.jpg', 'path': 'scrambles/id024_v1_fm.jpg'},
    {'name': 'images/id125_v1_so.jpg', 'path': 'images/id125_v1_so.jpg'},
    {'name': 'images/id063_v1_ff.jpg', 'path': 'images/id063_v1_ff.jpg'},
    {'name': 'images/id084_v1_si.jpg', 'path': 'images/id084_v1_si.jpg'},
    {'name': 'images/id098_v1_si.jpg', 'path': 'images/id098_v1_si.jpg'},
    {'name': 'scrambles/id136_v1_so.jpg', 'path': 'scrambles/id136_v1_so.jpg'},
    {'name': 'images/id015_v1_fm.jpg', 'path': 'images/id015_v1_fm.jpg'},
    {'name': 'images/id068_v1_ff.jpg', 'path': 'images/id068_v1_ff.jpg'},
    {'name': 'images/id136_v1_so.jpg', 'path': 'images/id136_v1_so.jpg'},
    {'name': 'scrambles/id050_v1_ff.jpg', 'path': 'scrambles/id050_v1_ff.jpg'},
    {'name': 'scrambles/id026_v1_fm.jpg', 'path': 'scrambles/id026_v1_fm.jpg'},
    {'name': 'scrambles/id131_v1_so.jpg', 'path': 'scrambles/id131_v1_so.jpg'},
    {'name': 'images/id106_v1_so.jpg', 'path': 'images/id106_v1_so.jpg'},
    {'name': 'scrambles/id060_v1_ff.jpg', 'path': 'scrambles/id060_v1_ff.jpg'},
    {'name': 'scrambles/id073_v1_si.jpg', 'path': 'scrambles/id073_v1_si.jpg'},
    {'name': 'scrambles/id106_v1_so.jpg', 'path': 'scrambles/id106_v1_so.jpg'},
    {'name': 'images/id007_v1_fm.jpg', 'path': 'images/id007_v1_fm.jpg'},
    {'name': 'scrambles/id037_v1_ff.jpg', 'path': 'scrambles/id037_v1_ff.jpg'},
    {'name': 'images/id118_v1_so.jpg', 'path': 'images/id118_v1_so.jpg'},
    {'name': 'images/id104_v1_si.jpg', 'path': 'images/id104_v1_si.jpg'},
    {'name': 'images/id072_v1_si.jpg', 'path': 'images/id072_v1_si.jpg'},
    {'name': 'scrambles/id098_v1_si.jpg', 'path': 'scrambles/id098_v1_si.jpg'},
    {'name': 'images/id132_v1_so.jpg', 'path': 'images/id132_v1_so.jpg'},
    {'name': 'images/id130_v1_so.jpg', 'path': 'images/id130_v1_so.jpg'},
    {'name': 'images/id025_v1_fm.jpg', 'path': 'images/id025_v1_fm.jpg'},
    {'name': 'images/id101_v1_si.jpg', 'path': 'images/id101_v1_si.jpg'},
    {'name': 'images/id105_v1_si.jpg', 'path': 'images/id105_v1_si.jpg'},
    {'name': 'images/id037_v1_ff.jpg', 'path': 'images/id037_v1_ff.jpg'},
    {'name': 'scrambles/id003_v1_fm.jpg', 'path': 'scrambles/id003_v1_fm.jpg'},
    {'name': 'images/id107_v1_so.jpg', 'path': 'images/id107_v1_so.jpg'},
    {'name': 'images/id134_v1_so.jpg', 'path': 'images/id134_v1_so.jpg'},
    {'name': 'scrambles/id081_v1_si.jpg', 'path': 'scrambles/id081_v1_si.jpg'},
    {'name': 'images/id137_v1_so.jpg', 'path': 'images/id137_v1_so.jpg'},
    {'name': 'images/id121_v1_so.jpg', 'path': 'images/id121_v1_so.jpg'},
    {'name': 'images/id036_v1_ff.jpg', 'path': 'images/id036_v1_ff.jpg'},
    {'name': 'images/id129_v1_so.jpg', 'path': 'images/id129_v1_so.jpg'},
    {'name': 'scrambles/id090_v1_si.jpg', 'path': 'scrambles/id090_v1_si.jpg'},
    {'name': 'scrambles/id115_v1_so.jpg', 'path': 'scrambles/id115_v1_so.jpg'},
    {'name': 'scrambles/id108_v1_so.jpg', 'path': 'scrambles/id108_v1_so.jpg'},
    {'name': 'images/id079_v1_si.jpg', 'path': 'images/id079_v1_si.jpg'},
    {'name': 'scrambles/id041_v1_ff.jpg', 'path': 'scrambles/id041_v1_ff.jpg'},
    {'name': 'images/id020_v1_fm.jpg', 'path': 'images/id020_v1_fm.jpg'},
    {'name': 'trials_Int.xlsx', 'path': 'trials_Int.xlsx'},
    {'name': 'runs.csv', 'path': 'runs.csv'},
    {'name': 'scrambles/id127_v1_so.jpg', 'path': 'scrambles/id127_v1_so.jpg'},
    {'name': 'images/id094_v1_si.jpg', 'path': 'images/id094_v1_si.jpg'},
    {'name': 'images/id087_v1_si.jpg', 'path': 'images/id087_v1_si.jpg'},
    {'name': 'images/id089_v1_si.jpg', 'path': 'images/id089_v1_si.jpg'},
    {'name': 'images/id058_v1_ff.jpg', 'path': 'images/id058_v1_ff.jpg'},
    {'name': 'scrambles/id123_v1_so.jpg', 'path': 'scrambles/id123_v1_so.jpg'},
    {'name': 'scrambles/id015_v1_fm.jpg', 'path': 'scrambles/id015_v1_fm.jpg'},
    {'name': 'images/id100_v1_si.jpg', 'path': 'images/id100_v1_si.jpg'},
    {'name': 'scrambles/id005_v1_fm.jpg', 'path': 'scrambles/id005_v1_fm.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var Welcome_text;
var space1;
var Instr1Clock;
var Instruction_text;
var space2;
var trial_InstrClock;
var stim1_inst;
var stim2_inst;
var stim3_inst;
var stim4_inst;
var trialExplanation;
var space3;
var masks_InstrClock;
var mask1_inst;
var mask2_inst;
var mask3_inst;
var mask4_inst;
var delayInstClock;
var fixDelay_2;
var delayExplanation;
var space4;
var responseInstClock;
var probe_inst;
var probeIndicator_inst;
var fixProbe_inst;
var reponseInstr;
var probeInst;
var rewardClock;
var rewardInst;
var space5;
var reminderButtonsClock;
var Button_reminder;
var space6;
var trialBegBlank_practiceClock;
var fixStartTrial_2;
var trial_practiceClock;
var stim1_Practice;
var stim2_Practice;
var stim3_Practice;
var stim4_Practice;
var fixDelay_Practice;
var probe_Practice;
var probeIndicator_Practice;
var fixProbe_Practice;
var keyResp_Practice;
var mask1_prac;
var mask2_prac;
var mask3_prac;
var mask4_prac;
var feedback_2Clock;
var msg;
var feedbackText;
var feedbackTestClock;
var key_resp_5;
var text_7;
var Before_runClock;
var text_run;
var key_resp_2;
var blankStartClock;
var fixStart;
var trialClock;
var stim1;
var stim2;
var stim3;
var stim4;
var fixDelay;
var probe;
var probeIndicator;
var fixProbe;
var keyResp;
var mask1_run;
var mask2_prac_2;
var mask3_run;
var mask4_run;
var trialEndBlankClock;
var fixStartTrial;
var blankEndClock;
var fixEnd;
var feedback_RunClock;
var space_Run;
var feedbackTxtRun;
var finalRoutineClock;
var space_final;
var txt_final;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  Welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcome_text',
    text: 'Welcome to the experiment!\n(Press space to continue)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instr1"
  Instr1Clock = new util.Clock();
  Instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_Instr"
  trial_InstrClock = new util.Clock();
  stim1_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  stim2_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  stim3_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  stim4_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim4_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  trialExplanation = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialExplanation',
    text: 'On this trial, you have to remember one stimulus and ignore the scrambled images',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  space3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "masks_Instr"
  masks_InstrClock = new util.Clock();
  mask1_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask1_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  mask2_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask2_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  mask3_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask3_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  mask4_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask4_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "delayInst"
  delayInstClock = new util.Clock();
  fixDelay_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixDelay_2', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 0, 0]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  delayExplanation = new visual.TextStim({
    win: psychoJS.window,
    name: 'delayExplanation',
    text: 'The red cross indicates the delay period. You have to keep the presented images in mind during this time. Fixate on the cross whenever it is present. No response can be made during this time.  ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  space4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "responseInst"
  responseInstClock = new util.Clock();
  probe_inst = new visual.ImageStim({
    win : psychoJS.window,
    name : 'probe_inst', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  probeIndicator_inst = new visual.TextStim({
    win: psychoJS.window,
    name: 'probeIndicator_inst',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  fixProbe_inst = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixProbe_inst', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 1, 0]),
    fillColor: new util.Color([0, 1, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  reponseInstr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  probeInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'probeInst',
    text: 'You just saw the test image. In this case, it was part of the memorized images. You also saw an arrow above the image. Press the correct arrow key to continue. You can answer immediately after the test image is presented without waiting for the green fixation cross. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "reward"
  rewardClock = new util.Clock();
  rewardInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'rewardInst',
    text: "Great! \nWe will now have a couple of training trials to make sure you understood the task. (Press 'space')",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reminderButtons"
  reminderButtonsClock = new util.Clock();
  Button_reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Button_reminder',
    text: 'Response reminder: left arrow if "<" and test image was part of memory images. \nRight arrow if ">" and test image was part of memory images\nNO response if test image was NOT part of memory images\n(Press \'space\' to start practice trials)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  space6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trialBegBlank_practice"
  trialBegBlank_practiceClock = new util.Clock();
  fixStartTrial_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixStartTrial_2', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "trial_practice"
  trial_practiceClock = new util.Clock();
  stim1_Practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1_Practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  stim2_Practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2_Practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  stim3_Practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3_Practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  stim4_Practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim4_Practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  fixDelay_Practice = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixDelay_Practice', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 0, 0]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  probe_Practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'probe_Practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  probeIndicator_Practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'probeIndicator_Practice',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  fixProbe_Practice = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixProbe_Practice', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 1, 0]),
    fillColor: new util.Color([0, 1, 0]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  keyResp_Practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mask1_prac = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask1_prac', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -9.0 
  });
  mask2_prac = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask2_prac', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -10.0 
  });
  mask3_prac = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask3_prac', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -11.0 
  });
  mask4_prac = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask4_prac', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -12.0 
  });
  // Initialize components for Routine "feedback_2"
  feedback_2Clock = new util.Clock();
  msg = "";
  
  feedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackText',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "feedbackTest"
  feedbackTestClock = new util.Clock();
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Before_run"
  Before_runClock = new util.Clock();
  text_run = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_run',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blankStart"
  blankStartClock = new util.Clock();
  fixStart = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixStart', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  stim3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  stim4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  fixDelay = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixDelay', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 0, 0]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  probe = new visual.ImageStim({
    win : psychoJS.window,
    name : 'probe', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  probeIndicator = new visual.TextStim({
    win: psychoJS.window,
    name: 'probeIndicator',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  fixProbe = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixProbe', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 1, 0]),
    fillColor: new util.Color([0, 1, 0]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mask1_run = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask1_run', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -10.0 
  });
  mask2_prac_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask2_prac_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, 0.11], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -11.0 
  });
  mask3_run = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask3_run', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.11, (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -12.0 
  });
  mask4_run = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mask4_run', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.11), (- 0.11)], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -13.0 
  });
  // Initialize components for Routine "trialEndBlank"
  trialEndBlankClock = new util.Clock();
  fixStartTrial = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixStartTrial', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "blankEnd"
  blankEndClock = new util.Clock();
  fixEnd = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixEnd', 
    vertices: 'cross', size:[0.01, 0.01],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "feedback_Run"
  feedback_RunClock = new util.Clock();
  space_Run = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  feedbackTxtRun = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackTxtRun',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "finalRoutine"
  finalRoutineClock = new util.Clock();
  space_final = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  txt_final = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_final',
    text: "Congratulations! You have finished the experiment. Press 'space' one last time.  ",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _space1_allKeys;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Welcome'-------
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space1.keys = undefined;
    space1.rt = undefined;
    _space1_allKeys = [];
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(Welcome_text);
    WelcomeComponents.push(space1);
    
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Welcome'-------
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Welcome_text* updates
    if (t >= 0.0 && Welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcome_text.tStart = t;  // (not accounting for frame time here)
      Welcome_text.frameNStart = frameN;  // exact frame index
      
      Welcome_text.setAutoDraw(true);
    }

    
    // *space1* updates
    if (t >= 0.0 && space1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space1.tStart = t;  // (not accounting for frame time here)
      space1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space1.clearEvents(); });
    }

    if (space1.status === PsychoJS.Status.STARTED) {
      let theseKeys = space1.getKeys({keyList: ['space'], waitRelease: false});
      _space1_allKeys = _space1_allKeys.concat(theseKeys);
      if (_space1_allKeys.length > 0) {
        space1.keys = _space1_allKeys[_space1_allKeys.length - 1].name;  // just the last key pressed
        space1.rt = _space1_allKeys[_space1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Welcome'-------
    WelcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space1.keys', space1.keys);
    if (typeof space1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space1.rt', space1.rt);
        routineTimer.reset();
        }
    
    space1.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructionLoop;
var currentLoop;
function instructionLoopLoopBegin(instructionLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  instructionLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instructionTxt.xlsx',
    seed: undefined, name: 'instructionLoop'
  });
  psychoJS.experiment.addLoop(instructionLoop); // add the loop to the experiment
  currentLoop = instructionLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  instructionLoop.forEach(function() {
    const snapshot = instructionLoop.getSnapshot();

    instructionLoopLoopScheduler.add(importConditions(snapshot));
    instructionLoopLoopScheduler.add(Instr1RoutineBegin(snapshot));
    instructionLoopLoopScheduler.add(Instr1RoutineEachFrame(snapshot));
    instructionLoopLoopScheduler.add(Instr1RoutineEnd(snapshot));
    instructionLoopLoopScheduler.add(endLoopIteration(instructionLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function instructionLoopLoopEnd() {
  psychoJS.experiment.removeLoop(instructionLoop);

  return Scheduler.Event.NEXT;
}


var trials_Instr;
function trials_InstrLoopBegin(trials_InstrLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_Instr = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trials_Int.xlsx', '0'),
    seed: undefined, name: 'trials_Instr'
  });
  psychoJS.experiment.addLoop(trials_Instr); // add the loop to the experiment
  currentLoop = trials_Instr;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_Instr.forEach(function() {
    const snapshot = trials_Instr.getSnapshot();

    trials_InstrLoopScheduler.add(importConditions(snapshot));
    trials_InstrLoopScheduler.add(trial_InstrRoutineBegin(snapshot));
    trials_InstrLoopScheduler.add(trial_InstrRoutineEachFrame(snapshot));
    trials_InstrLoopScheduler.add(trial_InstrRoutineEnd(snapshot));
    trials_InstrLoopScheduler.add(masks_InstrRoutineBegin(snapshot));
    trials_InstrLoopScheduler.add(masks_InstrRoutineEachFrame(snapshot));
    trials_InstrLoopScheduler.add(masks_InstrRoutineEnd(snapshot));
    trials_InstrLoopScheduler.add(delayInstRoutineBegin(snapshot));
    trials_InstrLoopScheduler.add(delayInstRoutineEachFrame(snapshot));
    trials_InstrLoopScheduler.add(delayInstRoutineEnd(snapshot));
    trials_InstrLoopScheduler.add(responseInstRoutineBegin(snapshot));
    trials_InstrLoopScheduler.add(responseInstRoutineEachFrame(snapshot));
    trials_InstrLoopScheduler.add(responseInstRoutineEnd(snapshot));
    trials_InstrLoopScheduler.add(rewardRoutineBegin(snapshot));
    trials_InstrLoopScheduler.add(rewardRoutineEachFrame(snapshot));
    trials_InstrLoopScheduler.add(rewardRoutineEnd(snapshot));
    trials_InstrLoopScheduler.add(endLoopIteration(trials_InstrLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_InstrLoopEnd() {
  psychoJS.experiment.removeLoop(trials_Instr);

  return Scheduler.Event.NEXT;
}


var repeat_InstrTrials;
function repeat_InstrTrialsLoopBegin(repeat_InstrTrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_InstrTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repeat_InstrTrials'
  });
  psychoJS.experiment.addLoop(repeat_InstrTrials); // add the loop to the experiment
  currentLoop = repeat_InstrTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  repeat_InstrTrials.forEach(function() {
    const snapshot = repeat_InstrTrials.getSnapshot();

    repeat_InstrTrialsLoopScheduler.add(importConditions(snapshot));
    repeat_InstrTrialsLoopScheduler.add(reminderButtonsRoutineBegin(snapshot));
    repeat_InstrTrialsLoopScheduler.add(reminderButtonsRoutineEachFrame(snapshot));
    repeat_InstrTrialsLoopScheduler.add(reminderButtonsRoutineEnd(snapshot));
    const trials_instr2LoopScheduler = new Scheduler(psychoJS);
    repeat_InstrTrialsLoopScheduler.add(trials_instr2LoopBegin, trials_instr2LoopScheduler);
    repeat_InstrTrialsLoopScheduler.add(trials_instr2LoopScheduler);
    repeat_InstrTrialsLoopScheduler.add(trials_instr2LoopEnd);
    repeat_InstrTrialsLoopScheduler.add(feedbackTestRoutineBegin(snapshot));
    repeat_InstrTrialsLoopScheduler.add(feedbackTestRoutineEachFrame(snapshot));
    repeat_InstrTrialsLoopScheduler.add(feedbackTestRoutineEnd(snapshot));
    repeat_InstrTrialsLoopScheduler.add(endLoopIteration(repeat_InstrTrialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials_instr2;
function trials_instr2LoopBegin(trials_instr2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_instr2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trials_Int.xlsx', '1:9'),
    seed: undefined, name: 'trials_instr2'
  });
  psychoJS.experiment.addLoop(trials_instr2); // add the loop to the experiment
  currentLoop = trials_instr2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_instr2.forEach(function() {
    const snapshot = trials_instr2.getSnapshot();

    trials_instr2LoopScheduler.add(importConditions(snapshot));
    trials_instr2LoopScheduler.add(trialBegBlank_practiceRoutineBegin(snapshot));
    trials_instr2LoopScheduler.add(trialBegBlank_practiceRoutineEachFrame(snapshot));
    trials_instr2LoopScheduler.add(trialBegBlank_practiceRoutineEnd(snapshot));
    trials_instr2LoopScheduler.add(trial_practiceRoutineBegin(snapshot));
    trials_instr2LoopScheduler.add(trial_practiceRoutineEachFrame(snapshot));
    trials_instr2LoopScheduler.add(trial_practiceRoutineEnd(snapshot));
    trials_instr2LoopScheduler.add(feedback_2RoutineBegin(snapshot));
    trials_instr2LoopScheduler.add(feedback_2RoutineEachFrame(snapshot));
    trials_instr2LoopScheduler.add(feedback_2RoutineEnd(snapshot));
    trials_instr2LoopScheduler.add(endLoopIteration(trials_instr2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_instr2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_instr2);

  return Scheduler.Event.NEXT;
}


function repeat_InstrTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_InstrTrials);

  return Scheduler.Event.NEXT;
}


var runs;
function runsLoopBegin(runsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  runs = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'runs.csv',
    seed: undefined, name: 'runs'
  });
  psychoJS.experiment.addLoop(runs); // add the loop to the experiment
  currentLoop = runs;  // we're now the current loop

  // Schedule all the trials in the trialList:
  runs.forEach(function() {
    const snapshot = runs.getSnapshot();

    runsLoopScheduler.add(importConditions(snapshot));
    runsLoopScheduler.add(Before_runRoutineBegin(snapshot));
    runsLoopScheduler.add(Before_runRoutineEachFrame(snapshot));
    runsLoopScheduler.add(Before_runRoutineEnd(snapshot));
    runsLoopScheduler.add(blankStartRoutineBegin(snapshot));
    runsLoopScheduler.add(blankStartRoutineEachFrame(snapshot));
    runsLoopScheduler.add(blankStartRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    runsLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    runsLoopScheduler.add(trialsLoopScheduler);
    runsLoopScheduler.add(trialsLoopEnd);
    runsLoopScheduler.add(blankEndRoutineBegin(snapshot));
    runsLoopScheduler.add(blankEndRoutineEachFrame(snapshot));
    runsLoopScheduler.add(blankEndRoutineEnd(snapshot));
    runsLoopScheduler.add(feedback_RunRoutineBegin(snapshot));
    runsLoopScheduler.add(feedback_RunRoutineEachFrame(snapshot));
    runsLoopScheduler.add(feedback_RunRoutineEnd(snapshot));
    runsLoopScheduler.add(endLoopIteration(runsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: trialSelect,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(trialEndBlankRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialEndBlankRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialEndBlankRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function runsLoopEnd() {
  psychoJS.experiment.removeLoop(runs);

  return Scheduler.Event.NEXT;
}


var _space2_allKeys;
var Instr1Components;
function Instr1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instr1'-------
    t = 0;
    Instr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruction_text.setText(instructions);
    space2.keys = undefined;
    space2.rt = undefined;
    _space2_allKeys = [];
    // keep track of which components have finished
    Instr1Components = [];
    Instr1Components.push(Instruction_text);
    Instr1Components.push(space2);
    
    Instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instr1'-------
    // get current time
    t = Instr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruction_text* updates
    if (t >= 0.0 && Instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_text.tStart = t;  // (not accounting for frame time here)
      Instruction_text.frameNStart = frameN;  // exact frame index
      
      Instruction_text.setAutoDraw(true);
    }

    
    // *space2* updates
    if (t >= 0.0 && space2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space2.tStart = t;  // (not accounting for frame time here)
      space2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space2.clearEvents(); });
    }

    if (space2.status === PsychoJS.Status.STARTED) {
      let theseKeys = space2.getKeys({keyList: ['space'], waitRelease: false});
      _space2_allKeys = _space2_allKeys.concat(theseKeys);
      if (_space2_allKeys.length > 0) {
        space2.keys = _space2_allKeys[_space2_allKeys.length - 1].name;  // just the last key pressed
        space2.rt = _space2_allKeys[_space2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instr1'-------
    Instr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space2.keys', space2.keys);
    if (typeof space2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space2.rt', space2.rt);
        routineTimer.reset();
        }
    
    space2.stop();
    // the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _space3_allKeys;
var trial_InstrComponents;
function trial_InstrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial_Instr'-------
    t = 0;
    trial_InstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    stim1_inst.setImage(stimulus1);
    stim2_inst.setImage(stimulus2);
    stim3_inst.setImage(stimulus3);
    stim4_inst.setImage(stimulus4);
    space3.keys = undefined;
    space3.rt = undefined;
    _space3_allKeys = [];
    // keep track of which components have finished
    trial_InstrComponents = [];
    trial_InstrComponents.push(stim1_inst);
    trial_InstrComponents.push(stim2_inst);
    trial_InstrComponents.push(stim3_inst);
    trial_InstrComponents.push(stim4_inst);
    trial_InstrComponents.push(trialExplanation);
    trial_InstrComponents.push(space3);
    
    trial_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_InstrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial_Instr'-------
    // get current time
    t = trial_InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim1_inst* updates
    if (t >= 0 && stim1_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_inst.tStart = t;  // (not accounting for frame time here)
      stim1_inst.frameNStart = frameN;  // exact frame index
      
      stim1_inst.setAutoDraw(true);
    }

    
    // *stim2_inst* updates
    if (t >= 0 && stim2_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2_inst.tStart = t;  // (not accounting for frame time here)
      stim2_inst.frameNStart = frameN;  // exact frame index
      
      stim2_inst.setAutoDraw(true);
    }

    
    // *stim3_inst* updates
    if (t >= 0.0 && stim3_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3_inst.tStart = t;  // (not accounting for frame time here)
      stim3_inst.frameNStart = frameN;  // exact frame index
      
      stim3_inst.setAutoDraw(true);
    }

    
    // *stim4_inst* updates
    if (t >= 0.0 && stim4_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4_inst.tStart = t;  // (not accounting for frame time here)
      stim4_inst.frameNStart = frameN;  // exact frame index
      
      stim4_inst.setAutoDraw(true);
    }

    
    // *trialExplanation* updates
    if (t >= 0.0 && trialExplanation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialExplanation.tStart = t;  // (not accounting for frame time here)
      trialExplanation.frameNStart = frameN;  // exact frame index
      
      trialExplanation.setAutoDraw(true);
    }

    
    // *space3* updates
    if (t >= 0.0 && space3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space3.tStart = t;  // (not accounting for frame time here)
      space3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space3.clearEvents(); });
    }

    if (space3.status === PsychoJS.Status.STARTED) {
      let theseKeys = space3.getKeys({keyList: ['space'], waitRelease: false});
      _space3_allKeys = _space3_allKeys.concat(theseKeys);
      if (_space3_allKeys.length > 0) {
        space3.keys = _space3_allKeys[_space3_allKeys.length - 1].name;  // just the last key pressed
        space3.rt = _space3_allKeys[_space3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_InstrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial_Instr'-------
    trial_InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space3.keys', space3.keys);
    if (typeof space3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space3.rt', space3.rt);
        routineTimer.reset();
        }
    
    space3.stop();
    // the Routine "trial_Instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var masks_InstrComponents;
function masks_InstrRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'masks_Instr'-------
    t = 0;
    masks_InstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    mask1_inst.setImage(mask1);
    mask2_inst.setImage(mask2);
    mask3_inst.setImage(mask3);
    mask4_inst.setImage(mask4);
    // keep track of which components have finished
    masks_InstrComponents = [];
    masks_InstrComponents.push(mask1_inst);
    masks_InstrComponents.push(mask2_inst);
    masks_InstrComponents.push(mask3_inst);
    masks_InstrComponents.push(mask4_inst);
    
    masks_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function masks_InstrRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'masks_Instr'-------
    // get current time
    t = masks_InstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mask1_inst* updates
    if (t >= 0 && mask1_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_inst.tStart = t;  // (not accounting for frame time here)
      mask1_inst.frameNStart = frameN;  // exact frame index
      
      mask1_inst.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask1_inst.status === PsychoJS.Status.STARTED || mask1_inst.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask1_inst.setAutoDraw(false);
    }
    
    // *mask2_inst* updates
    if (t >= 0 && mask2_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_inst.tStart = t;  // (not accounting for frame time here)
      mask2_inst.frameNStart = frameN;  // exact frame index
      
      mask2_inst.setAutoDraw(true);
    }

    frameRemains = 0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask2_inst.status === PsychoJS.Status.STARTED || mask2_inst.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask2_inst.setAutoDraw(false);
    }
    
    // *mask3_inst* updates
    if (t >= 0.0 && mask3_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_inst.tStart = t;  // (not accounting for frame time here)
      mask3_inst.frameNStart = frameN;  // exact frame index
      
      mask3_inst.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask3_inst.status === PsychoJS.Status.STARTED || mask3_inst.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask3_inst.setAutoDraw(false);
    }
    
    // *mask4_inst* updates
    if (t >= 0.0 && mask4_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_inst.tStart = t;  // (not accounting for frame time here)
      mask4_inst.frameNStart = frameN;  // exact frame index
      
      mask4_inst.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask4_inst.status === PsychoJS.Status.STARTED || mask4_inst.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask4_inst.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    masks_InstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function masks_InstrRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'masks_Instr'-------
    masks_InstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _space4_allKeys;
var delayInstComponents;
function delayInstRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'delayInst'-------
    t = 0;
    delayInstClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space4.keys = undefined;
    space4.rt = undefined;
    _space4_allKeys = [];
    // keep track of which components have finished
    delayInstComponents = [];
    delayInstComponents.push(fixDelay_2);
    delayInstComponents.push(delayExplanation);
    delayInstComponents.push(space4);
    
    delayInstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function delayInstRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'delayInst'-------
    // get current time
    t = delayInstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixDelay_2* updates
    if (t >= 0 && fixDelay_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixDelay_2.tStart = t;  // (not accounting for frame time here)
      fixDelay_2.frameNStart = frameN;  // exact frame index
      
      fixDelay_2.setAutoDraw(true);
    }

    
    // *delayExplanation* updates
    if (t >= 0.0 && delayExplanation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      delayExplanation.tStart = t;  // (not accounting for frame time here)
      delayExplanation.frameNStart = frameN;  // exact frame index
      
      delayExplanation.setAutoDraw(true);
    }

    
    // *space4* updates
    if (t >= 0.0 && space4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space4.tStart = t;  // (not accounting for frame time here)
      space4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space4.clearEvents(); });
    }

    if (space4.status === PsychoJS.Status.STARTED) {
      let theseKeys = space4.getKeys({keyList: ['space'], waitRelease: false});
      _space4_allKeys = _space4_allKeys.concat(theseKeys);
      if (_space4_allKeys.length > 0) {
        space4.keys = _space4_allKeys[_space4_allKeys.length - 1].name;  // just the last key pressed
        space4.rt = _space4_allKeys[_space4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    delayInstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function delayInstRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'delayInst'-------
    delayInstComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space4.keys', space4.keys);
    if (typeof space4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space4.rt', space4.rt);
        routineTimer.reset();
        }
    
    space4.stop();
    // the Routine "delayInst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _reponseInstr_allKeys;
var responseInstComponents;
function responseInstRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'responseInst'-------
    t = 0;
    responseInstClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    probe_inst.setImage(probeIm);
    probeIndicator_inst.setText(arrowDir);
    reponseInstr.keys = undefined;
    reponseInstr.rt = undefined;
    _reponseInstr_allKeys = [];
    // keep track of which components have finished
    responseInstComponents = [];
    responseInstComponents.push(probe_inst);
    responseInstComponents.push(probeIndicator_inst);
    responseInstComponents.push(fixProbe_inst);
    responseInstComponents.push(reponseInstr);
    responseInstComponents.push(probeInst);
    
    responseInstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function responseInstRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'responseInst'-------
    // get current time
    t = responseInstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probe_inst* updates
    if (t >= 0 && probe_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_inst.tStart = t;  // (not accounting for frame time here)
      probe_inst.frameNStart = frameN;  // exact frame index
      
      probe_inst.setAutoDraw(true);
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((probe_inst.status === PsychoJS.Status.STARTED || probe_inst.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      probe_inst.setAutoDraw(false);
    }
    
    // *probeIndicator_inst* updates
    if (t >= 0 && probeIndicator_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeIndicator_inst.tStart = t;  // (not accounting for frame time here)
      probeIndicator_inst.frameNStart = frameN;  // exact frame index
      
      probeIndicator_inst.setAutoDraw(true);
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((probeIndicator_inst.status === PsychoJS.Status.STARTED || probeIndicator_inst.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      probeIndicator_inst.setAutoDraw(false);
    }
    
    // *fixProbe_inst* updates
    if (t >= 2.5 && fixProbe_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixProbe_inst.tStart = t;  // (not accounting for frame time here)
      fixProbe_inst.frameNStart = frameN;  // exact frame index
      
      fixProbe_inst.setAutoDraw(true);
    }

    
    // *reponseInstr* updates
    if (t >= 2.5 && reponseInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reponseInstr.tStart = t;  // (not accounting for frame time here)
      reponseInstr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { reponseInstr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { reponseInstr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { reponseInstr.clearEvents(); });
    }

    if (reponseInstr.status === PsychoJS.Status.STARTED) {
      let theseKeys = reponseInstr.getKeys({keyList: ['left'], waitRelease: false});
      _reponseInstr_allKeys = _reponseInstr_allKeys.concat(theseKeys);
      if (_reponseInstr_allKeys.length > 0) {
        reponseInstr.keys = _reponseInstr_allKeys[_reponseInstr_allKeys.length - 1].name;  // just the last key pressed
        reponseInstr.rt = _reponseInstr_allKeys[_reponseInstr_allKeys.length - 1].rt;
        // was this correct?
        if (reponseInstr.keys == correctResp) {
            reponseInstr.corr = 1;
        } else {
            reponseInstr.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *probeInst* updates
    if (t >= 2.5 && probeInst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeInst.tStart = t;  // (not accounting for frame time here)
      probeInst.frameNStart = frameN;  // exact frame index
      
      probeInst.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseInstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseInstRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'responseInst'-------
    responseInstComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (reponseInstr.keys === undefined) {
      if (['None','none',undefined].includes(correctResp)) {
         reponseInstr.corr = 1;  // correct non-response
      } else {
         reponseInstr.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('reponseInstr.keys', reponseInstr.keys);
    psychoJS.experiment.addData('reponseInstr.corr', reponseInstr.corr);
    if (typeof reponseInstr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('reponseInstr.rt', reponseInstr.rt);
        routineTimer.reset();
        }
    
    reponseInstr.stop();
    // the Routine "responseInst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _space5_allKeys;
var rewardComponents;
function rewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'reward'-------
    t = 0;
    rewardClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space5.keys = undefined;
    space5.rt = undefined;
    _space5_allKeys = [];
    // keep track of which components have finished
    rewardComponents = [];
    rewardComponents.push(rewardInst);
    rewardComponents.push(space5);
    
    rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function rewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'reward'-------
    // get current time
    t = rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rewardInst* updates
    if (t >= 0.0 && rewardInst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rewardInst.tStart = t;  // (not accounting for frame time here)
      rewardInst.frameNStart = frameN;  // exact frame index
      
      rewardInst.setAutoDraw(true);
    }

    
    // *space5* updates
    if (t >= 0.0 && space5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space5.tStart = t;  // (not accounting for frame time here)
      space5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space5.clearEvents(); });
    }

    if (space5.status === PsychoJS.Status.STARTED) {
      let theseKeys = space5.getKeys({keyList: ['space'], waitRelease: false});
      _space5_allKeys = _space5_allKeys.concat(theseKeys);
      if (_space5_allKeys.length > 0) {
        space5.keys = _space5_allKeys[_space5_allKeys.length - 1].name;  // just the last key pressed
        space5.rt = _space5_allKeys[_space5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    rewardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'reward'-------
    rewardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space5.keys', space5.keys);
    if (typeof space5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space5.rt', space5.rt);
        routineTimer.reset();
        }
    
    space5.stop();
    // the Routine "reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _space6_allKeys;
var number_correct;
var reminderButtonsComponents;
function reminderButtonsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'reminderButtons'-------
    t = 0;
    reminderButtonsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space6.keys = undefined;
    space6.rt = undefined;
    _space6_allKeys = [];
    number_correct = 0;
    
    // keep track of which components have finished
    reminderButtonsComponents = [];
    reminderButtonsComponents.push(Button_reminder);
    reminderButtonsComponents.push(space6);
    
    reminderButtonsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function reminderButtonsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'reminderButtons'-------
    // get current time
    t = reminderButtonsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Button_reminder* updates
    if (t >= 0.0 && Button_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Button_reminder.tStart = t;  // (not accounting for frame time here)
      Button_reminder.frameNStart = frameN;  // exact frame index
      
      Button_reminder.setAutoDraw(true);
    }

    
    // *space6* updates
    if (t >= 0.0 && space6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space6.tStart = t;  // (not accounting for frame time here)
      space6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space6.clearEvents(); });
    }

    if (space6.status === PsychoJS.Status.STARTED) {
      let theseKeys = space6.getKeys({keyList: ['space'], waitRelease: false});
      _space6_allKeys = _space6_allKeys.concat(theseKeys);
      if (_space6_allKeys.length > 0) {
        space6.keys = _space6_allKeys[_space6_allKeys.length - 1].name;  // just the last key pressed
        space6.rt = _space6_allKeys[_space6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reminderButtonsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reminderButtonsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'reminderButtons'-------
    reminderButtonsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space6.keys', space6.keys);
    if (typeof space6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space6.rt', space6.rt);
        routineTimer.reset();
        }
    
    space6.stop();
    // the Routine "reminderButtons" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialBegBlank_practiceComponents;
function trialBegBlank_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trialBegBlank_practice'-------
    t = 0;
    trialBegBlank_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    trialBegBlank_practiceComponents = [];
    trialBegBlank_practiceComponents.push(fixStartTrial_2);
    
    trialBegBlank_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialBegBlank_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trialBegBlank_practice'-------
    // get current time
    t = trialBegBlank_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixStartTrial_2* updates
    if (t >= 0.0 && fixStartTrial_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixStartTrial_2.tStart = t;  // (not accounting for frame time here)
      fixStartTrial_2.frameNStart = frameN;  // exact frame index
      
      fixStartTrial_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixStartTrial_2.status === PsychoJS.Status.STARTED || fixStartTrial_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixStartTrial_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialBegBlank_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialBegBlank_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trialBegBlank_practice'-------
    trialBegBlank_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _keyResp_Practice_allKeys;
var trial_practiceComponents;
function trial_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial_practice'-------
    t = 0;
    trial_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(17.700000);
    // update component parameters for each repeat
    stim1_Practice.setImage(stimulus1);
    stim2_Practice.setImage(stimulus2);
    stim3_Practice.setImage(stimulus3);
    stim4_Practice.setImage(stimulus4);
    probe_Practice.setImage(probeIm);
    probeIndicator_Practice.setText(arrowDir);
    keyResp_Practice.keys = undefined;
    keyResp_Practice.rt = undefined;
    _keyResp_Practice_allKeys = [];
    mask1_prac.setImage(mask1);
    mask2_prac.setImage(mask2);
    mask3_prac.setImage(mask3);
    mask4_prac.setImage(mask4);
    // keep track of which components have finished
    trial_practiceComponents = [];
    trial_practiceComponents.push(stim1_Practice);
    trial_practiceComponents.push(stim2_Practice);
    trial_practiceComponents.push(stim3_Practice);
    trial_practiceComponents.push(stim4_Practice);
    trial_practiceComponents.push(fixDelay_Practice);
    trial_practiceComponents.push(probe_Practice);
    trial_practiceComponents.push(probeIndicator_Practice);
    trial_practiceComponents.push(fixProbe_Practice);
    trial_practiceComponents.push(keyResp_Practice);
    trial_practiceComponents.push(mask1_prac);
    trial_practiceComponents.push(mask2_prac);
    trial_practiceComponents.push(mask3_prac);
    trial_practiceComponents.push(mask4_prac);
    
    trial_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial_practice'-------
    // get current time
    t = trial_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim1_Practice* updates
    if (t >= 0 && stim1_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1_Practice.tStart = t;  // (not accounting for frame time here)
      stim1_Practice.frameNStart = frameN;  // exact frame index
      
      stim1_Practice.setAutoDraw(true);
    }

    frameRemains = 0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim1_Practice.status === PsychoJS.Status.STARTED || stim1_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim1_Practice.setAutoDraw(false);
    }
    
    // *stim2_Practice* updates
    if (t >= 0 && stim2_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2_Practice.tStart = t;  // (not accounting for frame time here)
      stim2_Practice.frameNStart = frameN;  // exact frame index
      
      stim2_Practice.setAutoDraw(true);
    }

    frameRemains = 0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim2_Practice.status === PsychoJS.Status.STARTED || stim2_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim2_Practice.setAutoDraw(false);
    }
    
    // *stim3_Practice* updates
    if (t >= 0.0 && stim3_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3_Practice.tStart = t;  // (not accounting for frame time here)
      stim3_Practice.frameNStart = frameN;  // exact frame index
      
      stim3_Practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim3_Practice.status === PsychoJS.Status.STARTED || stim3_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim3_Practice.setAutoDraw(false);
    }
    
    // *stim4_Practice* updates
    if (t >= 0.0 && stim4_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4_Practice.tStart = t;  // (not accounting for frame time here)
      stim4_Practice.frameNStart = frameN;  // exact frame index
      
      stim4_Practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim4_Practice.status === PsychoJS.Status.STARTED || stim4_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim4_Practice.setAutoDraw(false);
    }
    
    // *fixDelay_Practice* updates
    if (t >= 3.5 && fixDelay_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixDelay_Practice.tStart = t;  // (not accounting for frame time here)
      fixDelay_Practice.frameNStart = frameN;  // exact frame index
      
      fixDelay_Practice.setAutoDraw(true);
    }

    frameRemains = 3.5 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixDelay_Practice.status === PsychoJS.Status.STARTED || fixDelay_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixDelay_Practice.setAutoDraw(false);
    }
    
    // *probe_Practice* updates
    if (t >= 13.5 && probe_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_Practice.tStart = t;  // (not accounting for frame time here)
      probe_Practice.frameNStart = frameN;  // exact frame index
      
      probe_Practice.setAutoDraw(true);
    }

    frameRemains = 13.5 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((probe_Practice.status === PsychoJS.Status.STARTED || probe_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      probe_Practice.setAutoDraw(false);
    }
    
    // *probeIndicator_Practice* updates
    if (t >= 13.5 && probeIndicator_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeIndicator_Practice.tStart = t;  // (not accounting for frame time here)
      probeIndicator_Practice.frameNStart = frameN;  // exact frame index
      
      probeIndicator_Practice.setAutoDraw(true);
    }

    frameRemains = 13.5 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((probeIndicator_Practice.status === PsychoJS.Status.STARTED || probeIndicator_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      probeIndicator_Practice.setAutoDraw(false);
    }
    
    // *fixProbe_Practice* updates
    if (t >= 14.7 && fixProbe_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixProbe_Practice.tStart = t;  // (not accounting for frame time here)
      fixProbe_Practice.frameNStart = frameN;  // exact frame index
      
      fixProbe_Practice.setAutoDraw(true);
    }

    frameRemains = 14.7 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixProbe_Practice.status === PsychoJS.Status.STARTED || fixProbe_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixProbe_Practice.setAutoDraw(false);
    }
    
    // *keyResp_Practice* updates
    if (t >= 13.5 && keyResp_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyResp_Practice.tStart = t;  // (not accounting for frame time here)
      keyResp_Practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyResp_Practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyResp_Practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyResp_Practice.clearEvents(); });
    }

    frameRemains = 13.5 + 4.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((keyResp_Practice.status === PsychoJS.Status.STARTED || keyResp_Practice.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      keyResp_Practice.status = PsychoJS.Status.FINISHED;
  }

    if (keyResp_Practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyResp_Practice.getKeys({keyList: ['right', 'left', 'None'], waitRelease: false});
      _keyResp_Practice_allKeys = _keyResp_Practice_allKeys.concat(theseKeys);
      if (_keyResp_Practice_allKeys.length > 0) {
        keyResp_Practice.keys = _keyResp_Practice_allKeys[0].name;  // just the first key pressed
        keyResp_Practice.rt = _keyResp_Practice_allKeys[0].rt;
        // was this correct?
        if (keyResp_Practice.keys == correctResp) {
            keyResp_Practice.corr = 1;
        } else {
            keyResp_Practice.corr = 0;
        }
      }
    }
    
    
    // *mask1_prac* updates
    if (t >= 3.3 && mask1_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_prac.tStart = t;  // (not accounting for frame time here)
      mask1_prac.frameNStart = frameN;  // exact frame index
      
      mask1_prac.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask1_prac.status === PsychoJS.Status.STARTED || mask1_prac.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask1_prac.setAutoDraw(false);
    }
    
    // *mask2_prac* updates
    if (t >= 3.3 && mask2_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_prac.tStart = t;  // (not accounting for frame time here)
      mask2_prac.frameNStart = frameN;  // exact frame index
      
      mask2_prac.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask2_prac.status === PsychoJS.Status.STARTED || mask2_prac.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask2_prac.setAutoDraw(false);
    }
    
    // *mask3_prac* updates
    if (t >= 3.3 && mask3_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_prac.tStart = t;  // (not accounting for frame time here)
      mask3_prac.frameNStart = frameN;  // exact frame index
      
      mask3_prac.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask3_prac.status === PsychoJS.Status.STARTED || mask3_prac.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask3_prac.setAutoDraw(false);
    }
    
    // *mask4_prac* updates
    if (t >= 3.3 && mask4_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_prac.tStart = t;  // (not accounting for frame time here)
      mask4_prac.frameNStart = frameN;  // exact frame index
      
      mask4_prac.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask4_prac.status === PsychoJS.Status.STARTED || mask4_prac.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask4_prac.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial_practice'-------
    trial_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (keyResp_Practice.keys === undefined) {
      if (['None','none',undefined].includes(correctResp)) {
         keyResp_Practice.corr = 1;  // correct non-response
      } else {
         keyResp_Practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('keyResp_Practice.keys', keyResp_Practice.keys);
    psychoJS.experiment.addData('keyResp_Practice.corr', keyResp_Practice.corr);
    if (typeof keyResp_Practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyResp_Practice.rt', keyResp_Practice.rt);
        }
    
    keyResp_Practice.stop();
    return Scheduler.Event.NEXT;
  };
}


var feedback_2Components;
function feedback_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_2'-------
    t = 0;
    feedback_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    if (keyResp_Practice.corr) {
        msg = "Correct";
        number_correct = (number_correct + 1);
    } else {
        msg = "Incorrect";
    }
    
    feedbackText.setText(msg);
    // keep track of which components have finished
    feedback_2Components = [];
    feedback_2Components.push(feedbackText);
    
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_2'-------
    // get current time
    t = feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackText* updates
    if (t >= 0.0 && feedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackText.tStart = t;  // (not accounting for frame time here)
      feedbackText.frameNStart = frameN;  // exact frame index
      
      feedbackText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((feedbackText.status === PsychoJS.Status.STARTED || feedbackText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      feedbackText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var percent_correct;
function feedback_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_2'-------
    feedback_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    percent_correct = round(((number_correct / trials_instr2.nTotal) * 100), 2).toString();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var feedbackTestComponents;
function feedbackTestRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedbackTest'-------
    t = 0;
    feedbackTestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    text_7.setText((("Perfomance has to be above 70% to move-on to the real task. Otherwise we can practice a little more. Your performance was " + percent_correct) + "%."));
    if (((number_correct / trials_instr2.nTotal) >= 0.63)) {
        repeat_InstrTrials.finished = true;
    }
    
    // keep track of which components have finished
    feedbackTestComponents = [];
    feedbackTestComponents.push(key_resp_5);
    feedbackTestComponents.push(text_7);
    
    feedbackTestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackTestRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedbackTest'-------
    // get current time
    t = feedbackTestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackTestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackTestRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedbackTest'-------
    feedbackTestComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "feedbackTest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Before_runComponents;
function Before_runRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Before_run'-------
    t = 0;
    Before_runClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_run.setText(textBefore_run);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    number_correct = 0;
    
    // keep track of which components have finished
    Before_runComponents = [];
    Before_runComponents.push(text_run);
    Before_runComponents.push(key_resp_2);
    
    Before_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Before_runRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Before_run'-------
    // get current time
    t = Before_runClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_run* updates
    if (t >= 0.0 && text_run.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_run.tStart = t;  // (not accounting for frame time here)
      text_run.frameNStart = frameN;  // exact frame index
      
      text_run.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Before_runComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Before_runRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Before_run'-------
    Before_runComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Before_run" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blankStartComponents;
function blankStartRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blankStart'-------
    t = 0;
    blankStartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blankStartComponents = [];
    blankStartComponents.push(fixStart);
    
    blankStartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blankStartRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blankStart'-------
    // get current time
    t = blankStartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixStart* updates
    if (t >= 0.0 && fixStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixStart.tStart = t;  // (not accounting for frame time here)
      fixStart.frameNStart = frameN;  // exact frame index
      
      fixStart.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixStart.status === PsychoJS.Status.STARTED || fixStart.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixStart.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blankStartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankStartRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blankStart'-------
    blankStartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _keyResp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(17.700000);
    // update component parameters for each repeat
    stim1.setImage(stimulus1);
    stim2.setImage(stimulus2);
    stim3.setImage(stimulus3);
    stim4.setImage(stimulus4);
    probe.setImage(probeIm);
    probeIndicator.setText(arrowDir);
    keyResp.keys = undefined;
    keyResp.rt = undefined;
    _keyResp_allKeys = [];
    if ((trials.thisN === 0)) {
        number_correct = 0;
    }
    
    mask1_run.setImage(mask1);
    mask2_prac_2.setImage(mask2);
    mask3_run.setImage(mask3);
    mask4_run.setImage(mask4);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(stim1);
    trialComponents.push(stim2);
    trialComponents.push(stim3);
    trialComponents.push(stim4);
    trialComponents.push(fixDelay);
    trialComponents.push(probe);
    trialComponents.push(probeIndicator);
    trialComponents.push(fixProbe);
    trialComponents.push(keyResp);
    trialComponents.push(mask1_run);
    trialComponents.push(mask2_prac_2);
    trialComponents.push(mask3_run);
    trialComponents.push(mask4_run);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim1* updates
    if (t >= 0 && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = 0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim1.status === PsychoJS.Status.STARTED || stim1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *stim2* updates
    if (t >= 0 && stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2.tStart = t;  // (not accounting for frame time here)
      stim2.frameNStart = frameN;  // exact frame index
      
      stim2.setAutoDraw(true);
    }

    frameRemains = 0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim2.status === PsychoJS.Status.STARTED || stim2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim2.setAutoDraw(false);
    }
    
    // *stim3* updates
    if (t >= 0.0 && stim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3.tStart = t;  // (not accounting for frame time here)
      stim3.frameNStart = frameN;  // exact frame index
      
      stim3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim3.status === PsychoJS.Status.STARTED || stim3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim3.setAutoDraw(false);
    }
    
    // *stim4* updates
    if (t >= 0.0 && stim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4.tStart = t;  // (not accounting for frame time here)
      stim4.frameNStart = frameN;  // exact frame index
      
      stim4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stim4.status === PsychoJS.Status.STARTED || stim4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stim4.setAutoDraw(false);
    }
    
    // *fixDelay* updates
    if (t >= 3.5 && fixDelay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixDelay.tStart = t;  // (not accounting for frame time here)
      fixDelay.frameNStart = frameN;  // exact frame index
      
      fixDelay.setAutoDraw(true);
    }

    frameRemains = 3.5 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixDelay.status === PsychoJS.Status.STARTED || fixDelay.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixDelay.setAutoDraw(false);
    }
    
    // *probe* updates
    if (t >= 13.5 && probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe.tStart = t;  // (not accounting for frame time here)
      probe.frameNStart = frameN;  // exact frame index
      
      probe.setAutoDraw(true);
    }

    frameRemains = 13.5 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((probe.status === PsychoJS.Status.STARTED || probe.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      probe.setAutoDraw(false);
    }
    
    // *probeIndicator* updates
    if (t >= 13.5 && probeIndicator.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeIndicator.tStart = t;  // (not accounting for frame time here)
      probeIndicator.frameNStart = frameN;  // exact frame index
      
      probeIndicator.setAutoDraw(true);
    }

    frameRemains = 13.5 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((probeIndicator.status === PsychoJS.Status.STARTED || probeIndicator.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      probeIndicator.setAutoDraw(false);
    }
    
    // *fixProbe* updates
    if (t >= 14.7 && fixProbe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixProbe.tStart = t;  // (not accounting for frame time here)
      fixProbe.frameNStart = frameN;  // exact frame index
      
      fixProbe.setAutoDraw(true);
    }

    frameRemains = 14.7 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixProbe.status === PsychoJS.Status.STARTED || fixProbe.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixProbe.setAutoDraw(false);
    }
    
    // *keyResp* updates
    if (t >= 13.5 && keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyResp.tStart = t;  // (not accounting for frame time here)
      keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyResp.clearEvents(); });
    }

    frameRemains = 13.5 + 4.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((keyResp.status === PsychoJS.Status.STARTED || keyResp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      keyResp.status = PsychoJS.Status.FINISHED;
  }

    if (keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyResp.getKeys({keyList: ['right', 'left', 'None'], waitRelease: false});
      _keyResp_allKeys = _keyResp_allKeys.concat(theseKeys);
      if (_keyResp_allKeys.length > 0) {
        keyResp.keys = _keyResp_allKeys[0].name;  // just the first key pressed
        keyResp.rt = _keyResp_allKeys[0].rt;
        // was this correct?
        if (keyResp.keys == correctResp) {
            keyResp.corr = 1;
        } else {
            keyResp.corr = 0;
        }
      }
    }
    
    
    // *mask1_run* updates
    if (t >= 3.3 && mask1_run.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask1_run.tStart = t;  // (not accounting for frame time here)
      mask1_run.frameNStart = frameN;  // exact frame index
      
      mask1_run.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask1_run.status === PsychoJS.Status.STARTED || mask1_run.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask1_run.setAutoDraw(false);
    }
    
    // *mask2_prac_2* updates
    if (t >= 3.3 && mask2_prac_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask2_prac_2.tStart = t;  // (not accounting for frame time here)
      mask2_prac_2.frameNStart = frameN;  // exact frame index
      
      mask2_prac_2.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask2_prac_2.status === PsychoJS.Status.STARTED || mask2_prac_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask2_prac_2.setAutoDraw(false);
    }
    
    // *mask3_run* updates
    if (t >= 3.3 && mask3_run.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask3_run.tStart = t;  // (not accounting for frame time here)
      mask3_run.frameNStart = frameN;  // exact frame index
      
      mask3_run.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask3_run.status === PsychoJS.Status.STARTED || mask3_run.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask3_run.setAutoDraw(false);
    }
    
    // *mask4_run* updates
    if (t >= 3.3 && mask4_run.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask4_run.tStart = t;  // (not accounting for frame time here)
      mask4_run.frameNStart = frameN;  // exact frame index
      
      mask4_run.setAutoDraw(true);
    }

    frameRemains = 3.3 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((mask4_run.status === PsychoJS.Status.STARTED || mask4_run.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      mask4_run.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (keyResp.keys === undefined) {
      if (['None','none',undefined].includes(correctResp)) {
         keyResp.corr = 1;  // correct non-response
      } else {
         keyResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('keyResp.keys', keyResp.keys);
    psychoJS.experiment.addData('keyResp.corr', keyResp.corr);
    if (typeof keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyResp.rt', keyResp.rt);
        }
    
    keyResp.stop();
    return Scheduler.Event.NEXT;
  };
}


var trialEndBlankComponents;
function trialEndBlankRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trialEndBlank'-------
    t = 0;
    trialEndBlankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    trialEndBlankComponents = [];
    trialEndBlankComponents.push(fixStartTrial);
    
    trialEndBlankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialEndBlankRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trialEndBlank'-------
    // get current time
    t = trialEndBlankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixStartTrial* updates
    if (t >= 0.0 && fixStartTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixStartTrial.tStart = t;  // (not accounting for frame time here)
      fixStartTrial.frameNStart = frameN;  // exact frame index
      
      fixStartTrial.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixStartTrial.status === PsychoJS.Status.STARTED || fixStartTrial.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixStartTrial.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialEndBlankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialEndBlankRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trialEndBlank'-------
    trialEndBlankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (keyResp.corr) {
        number_correct = (number_correct + 1);
    }
    percent_correct = round(((number_correct / trials.nTotal) * 100), 2).toString();
    
    return Scheduler.Event.NEXT;
  };
}


var blankEndComponents;
function blankEndRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blankEnd'-------
    t = 0;
    blankEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blankEndComponents = [];
    blankEndComponents.push(fixEnd);
    
    blankEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blankEndRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blankEnd'-------
    // get current time
    t = blankEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixEnd* updates
    if (t >= 0.0 && fixEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixEnd.tStart = t;  // (not accounting for frame time here)
      fixEnd.frameNStart = frameN;  // exact frame index
      
      fixEnd.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixEnd.status === PsychoJS.Status.STARTED || fixEnd.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixEnd.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blankEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankEndRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blankEnd'-------
    blankEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _space_Run_allKeys;
var feedback_RunComponents;
function feedback_RunRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_Run'-------
    t = 0;
    feedback_RunClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_Run.keys = undefined;
    space_Run.rt = undefined;
    _space_Run_allKeys = [];
    feedbackTxtRun.setText((("Your performance was " + percent_correct) + "%. Press space to continue"));
    // keep track of which components have finished
    feedback_RunComponents = [];
    feedback_RunComponents.push(space_Run);
    feedback_RunComponents.push(feedbackTxtRun);
    
    feedback_RunComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_RunRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_Run'-------
    // get current time
    t = feedback_RunClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_Run* updates
    if (t >= 0.0 && space_Run.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_Run.tStart = t;  // (not accounting for frame time here)
      space_Run.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_Run.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_Run.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_Run.clearEvents(); });
    }

    if (space_Run.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_Run.getKeys({keyList: ['space'], waitRelease: false});
      _space_Run_allKeys = _space_Run_allKeys.concat(theseKeys);
      if (_space_Run_allKeys.length > 0) {
        space_Run.keys = _space_Run_allKeys[_space_Run_allKeys.length - 1].name;  // just the last key pressed
        space_Run.rt = _space_Run_allKeys[_space_Run_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *feedbackTxtRun* updates
    if (t >= 0.0 && feedbackTxtRun.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackTxtRun.tStart = t;  // (not accounting for frame time here)
      feedbackTxtRun.frameNStart = frameN;  // exact frame index
      
      feedbackTxtRun.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_RunComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_RunRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_Run'-------
    feedback_RunComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space_Run.keys', space_Run.keys);
    if (typeof space_Run.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_Run.rt', space_Run.rt);
        routineTimer.reset();
        }
    
    space_Run.stop();
    // the Routine "feedback_Run" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _space_final_allKeys;
var finalRoutineComponents;
function finalRoutineRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'finalRoutine'-------
    t = 0;
    finalRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_final.keys = undefined;
    space_final.rt = undefined;
    _space_final_allKeys = [];
    // keep track of which components have finished
    finalRoutineComponents = [];
    finalRoutineComponents.push(space_final);
    finalRoutineComponents.push(txt_final);
    
    finalRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finalRoutineRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'finalRoutine'-------
    // get current time
    t = finalRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_final* updates
    if (t >= 0.0 && space_final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_final.tStart = t;  // (not accounting for frame time here)
      space_final.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_final.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_final.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_final.clearEvents(); });
    }

    if (space_final.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_final.getKeys({keyList: ['space'], waitRelease: false});
      _space_final_allKeys = _space_final_allKeys.concat(theseKeys);
      if (_space_final_allKeys.length > 0) {
        space_final.keys = _space_final_allKeys[_space_final_allKeys.length - 1].name;  // just the last key pressed
        space_final.rt = _space_final_allKeys[_space_final_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *txt_final* updates
    if (t >= 0.0 && txt_final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_final.tStart = t;  // (not accounting for frame time here)
      txt_final.frameNStart = frameN;  // exact frame index
      
      txt_final.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finalRoutineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalRoutineRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'finalRoutine'-------
    finalRoutineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('space_final.keys', space_final.keys);
    if (typeof space_final.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_final.rt', space_final.rt);
        routineTimer.reset();
        }
    
    space_final.stop();
    // the Routine "finalRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
