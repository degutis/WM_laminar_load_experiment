#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.10),
    on Thu 11 Mar 2021 03:11:00 PM CET
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

import subprocess
subprocess.call(['sh', './gitHashRun.sh'])


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.10'
expName = 'Working memory load'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001', 'age': '', 'sex at birth': '', 'dominant hand': '', 'instructions': '1', 'realRuns': '0', 'runNumber': 'trials_1.csv'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s' % (expInfo['participant']) + '/%s_%s_%s_%s' % (expInfo['participant'], expInfo['session'],expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/data/pt_02389/PyschoPyCode/Load_experiment/Retrocue_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1024, 768], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Welcome"
WelcomeClock = core.Clock()
Welcome_text = visual.TextStim(win=win, name='Welcome_text',
    text='Willkommen zum Experiment!\n(Drücke bitte eine Taste)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
space1 = keyboard.Keyboard()

# Initialize components for Routine "Instr1"
Instr1Clock = core.Clock()
Instruction_text = visual.TextStim(win=win, name='Instruction_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
space2 = keyboard.Keyboard()

# Initialize components for Routine "trial_Instr"
trial_InstrClock = core.Clock()
stim1_inst = visual.ImageStim(
    win=win,
    name='stim1_inst', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
stim2_inst = visual.ImageStim(
    win=win,
    name='stim2_inst', 
    image='sin', mask=None,
    ori=0, pos=(0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
stim3_inst = visual.ImageStim(
    win=win,
    name='stim3_inst', 
    image='sin', mask=None,
    ori=0, pos=(0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stim4_inst = visual.ImageStim(
    win=win,
    name='stim4_inst', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
trialExplanation = visual.TextStim(win=win, name='trialExplanation',
    text='Hier musst du dir ein Bild merken und die übrigen Muster ignorieren.\n',
    font='Arial',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
space3 = keyboard.Keyboard()

# Initialize components for Routine "masks_Instr"
masks_InstrClock = core.Clock()
mask1_inst = visual.ImageStim(
    win=win,
    name='mask1_inst', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
mask2_inst = visual.ImageStim(
    win=win,
    name='mask2_inst', 
    image='sin', mask=None,
    ori=0, pos=(0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
mask3_inst = visual.ImageStim(
    win=win,
    name='mask3_inst', 
    image='sin', mask=None,
    ori=0, pos=(0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
mask4_inst = visual.ImageStim(
    win=win,
    name='mask4_inst', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)

# Initialize components for Routine "delayInst"
delayInstClock = core.Clock()
fixDelay_2 = visual.ShapeStim(
    win=win, name='fixDelay_2', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,0,0], lineColorSpace='rgb',
    fillColor=[1,0,0], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
delayExplanation = visual.TextStim(win=win, name='delayExplanation',
    text='Das rote Kreuz markiert die Periode in der du die dir gezeigten Bilder im Kopf behalten solltest. \nWährend dieser Zeit sind keine Antworten möglich.\n',
    font='Arial',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
space4 = keyboard.Keyboard()

# Initialize components for Routine "responseInst"
responseInstClock = core.Clock()
probe_inst = visual.ImageStim(
    win=win,
    name='probe_inst', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
fixProbe_inst = visual.ShapeStim(
    win=win, name='fixProbe_inst', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,1,0], lineColorSpace='rgb',
    fillColor=[0,1,0], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
reponseInstr = keyboard.Keyboard()
probeInst = visual.TextStim(win=win, name='probeInst',
    text='Das war das Probebild. In diesem Fall gehörte es zu den zu merkenden Bildern. Bitte drücke die entsprechende Taste um weiterzumachen. Du kannst immer antworten sobald das Probebild erscheint und musst nicht auf das grüne Kreuz warten.\n',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);

# Initialize components for Routine "reward"
rewardClock = core.Clock()
rewardInst = visual.TextStim(win=win, name='rewardInst',
    text='Super! \nLass uns einige Versuchsdurchgänge probieren um sicherzugehen, dass du die Aufgabe verstanden hast.\n(Drücke bitte eine Taste)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
space5 = keyboard.Keyboard()

# Initialize components for Routine "reminderButtons"
reminderButtonsClock = core.Clock()
Button_reminder = visual.TextStim(win=win, name='Button_reminder',
    text='Zur Erinnerung: \nLinke Taste, wenn das Probebild Teil der zu merkeneden Bilder war\nRechte Taste, wenn das Probebild nicht Teil der zu merkenden Bilder war\n(Drücke eine Taste um mit den Probedurchgängen zu beginnen)',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
space6 = keyboard.Keyboard()

# Initialize components for Routine "trialBegBlank_practice"
trialBegBlank_practiceClock = core.Clock()
fixStartTrial_2 = visual.ShapeStim(
    win=win, name='fixStartTrial_2', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "trial_practice"
trial_practiceClock = core.Clock()
stim1_Practice = visual.ImageStim(
    win=win,
    name='stim1_Practice', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
stim2_Practice = visual.ImageStim(
    win=win,
    name='stim2_Practice', 
    image='sin', mask=None,
    ori=0, pos=(0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
stim3_Practice = visual.ImageStim(
    win=win,
    name='stim3_Practice', 
    image='sin', mask=None,
    ori=0, pos=(0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stim4_Practice = visual.ImageStim(
    win=win,
    name='stim4_Practice', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
fixDelay_Practice = visual.ShapeStim(
    win=win, name='fixDelay_Practice', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,0,0], lineColorSpace='rgb',
    fillColor=[1,0,0], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
probe_Practice = visual.ImageStim(
    win=win,
    name='probe_Practice', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
fixProbe_Practice = visual.ShapeStim(
    win=win, name='fixProbe_Practice', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,1,0], lineColorSpace='rgb',
    fillColor=[0,1,0], fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
keyResp_Practice = keyboard.Keyboard()
mask1_prac = visual.ImageStim(
    win=win,
    name='mask1_prac', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-8.0)
mask2_prac = visual.ImageStim(
    win=win,
    name='mask2_prac', 
    image='sin', mask=None,
    ori=0, pos=(0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-9.0)
mask3_prac = visual.ImageStim(
    win=win,
    name='mask3_prac', 
    image='sin', mask=None,
    ori=0, pos=(0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-10.0)
mask4_prac = visual.ImageStim(
    win=win,
    name='mask4_prac', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-11.0)

# Initialize components for Routine "feedback_2"
feedback_2Clock = core.Clock()
msg=""
feedbackText = visual.TextStim(win=win, name='feedbackText',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "feedbackTest"
feedbackTestClock = core.Clock()
key_resp_5 = keyboard.Keyboard()
text_7 = visual.TextStim(win=win, name='text_7',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "Before_run"
Before_runClock = core.Clock()
text_run = visual.TextStim(win=win, name='text_run',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
trigger1 = keyboard.Keyboard()

# Initialize components for Routine "blankStart"
blankStartClock = core.Clock()
fixStart = visual.ShapeStim(
    win=win, name='fixStart', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "trial"
trialClock = core.Clock()
stim1 = visual.ImageStim(
    win=win,
    name='stim1', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
stim2 = visual.ImageStim(
    win=win,
    name='stim2', 
    image='sin', mask=None,
    ori=0, pos=(0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
stim3 = visual.ImageStim(
    win=win,
    name='stim3', 
    image='sin', mask=None,
    ori=0, pos=(0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
stim4 = visual.ImageStim(
    win=win,
    name='stim4', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
fixDelay = visual.ShapeStim(
    win=win, name='fixDelay', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,0,0], lineColorSpace='rgb',
    fillColor=[1,0,0], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
probe = visual.ImageStim(
    win=win,
    name='probe', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
fixProbe = visual.ShapeStim(
    win=win, name='fixProbe', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0,1,0], lineColorSpace='rgb',
    fillColor=[0,1,0], fillColorSpace='rgb',
    opacity=1, depth=-6.0, interpolate=True)
keyResp = keyboard.Keyboard()
mask1_run = visual.ImageStim(
    win=win,
    name='mask1_run', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-9.0)
mask2_prac_2 = visual.ImageStim(
    win=win,
    name='mask2_prac_2', 
    image='sin', mask=None,
    ori=0, pos=(0.11, 0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-10.0)
mask3_run = visual.ImageStim(
    win=win,
    name='mask3_run', 
    image='sin', mask=None,
    ori=0, pos=(0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-11.0)
mask4_run = visual.ImageStim(
    win=win,
    name='mask4_run', 
    image='sin', mask=None,
    ori=0, pos=(-0.11, -0.11), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-12.0)

# Initialize components for Routine "trialEndBlank"
trialEndBlankClock = core.Clock()
fixStartTrial = visual.ShapeStim(
    win=win, name='fixStartTrial', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "blankEnd"
blankEndClock = core.Clock()
fixEnd = visual.ShapeStim(
    win=win, name='fixEnd', vertices='cross',
    size=(0.01, 0.01),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)

# Initialize components for Routine "feedback_Run"
feedback_RunClock = core.Clock()
space_Run = keyboard.Keyboard()
feedbackTxtRun = visual.TextStim(win=win, name='feedbackTxtRun',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# set up handler to look after randomisation of conditions etc
dontSkipInstructions = data.TrialHandler(nReps=expInfo['instructions'], method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='dontSkipInstructions')
thisExp.addLoop(dontSkipInstructions)  # add the loop to the experiment
thisDontSkipInstruction = dontSkipInstructions.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDontSkipInstruction.rgb)
if thisDontSkipInstruction != None:
    for paramName in thisDontSkipInstruction:
        exec('{} = thisDontSkipInstruction[paramName]'.format(paramName))

for thisDontSkipInstruction in dontSkipInstructions:
    currentLoop = dontSkipInstructions
    # abbreviate parameter names if possible (e.g. rgb = thisDontSkipInstruction.rgb)
    if thisDontSkipInstruction != None:
        for paramName in thisDontSkipInstruction:
            exec('{} = thisDontSkipInstruction[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Welcome"-------
    continueRoutine = True
    # update component parameters for each repeat
    space1.keys = []
    space1.rt = []
    _space1_allKeys = []
    # keep track of which components have finished
    WelcomeComponents = [Welcome_text, space1]
    for thisComponent in WelcomeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    WelcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Welcome"-------
    while continueRoutine:
        # get current time
        t = WelcomeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=WelcomeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Welcome_text* updates
        if Welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Welcome_text.frameNStart = frameN  # exact frame index
            Welcome_text.tStart = t  # local t and not account for scr refresh
            Welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Welcome_text, 'tStartRefresh')  # time at next scr refresh
            Welcome_text.setAutoDraw(True)
        
        # *space1* updates
        waitOnFlip = False
        if space1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            space1.frameNStart = frameN  # exact frame index
            space1.tStart = t  # local t and not account for scr refresh
            space1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(space1, 'tStartRefresh')  # time at next scr refresh
            space1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(space1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(space1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if space1.status == STARTED and not waitOnFlip:
            theseKeys = space1.getKeys(keyList=['b', 'y'], waitRelease=False)
            _space1_allKeys.extend(theseKeys)
            if len(_space1_allKeys):
                space1.keys = _space1_allKeys[-1].name  # just the last key pressed
                space1.rt = _space1_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in WelcomeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Welcome"-------
    for thisComponent in WelcomeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    dontSkipInstructions.addData('Welcome_text.started', Welcome_text.tStartRefresh)
    dontSkipInstructions.addData('Welcome_text.stopped', Welcome_text.tStopRefresh)
    # check responses
    if space1.keys in ['', [], None]:  # No response was made
        space1.keys = None
    dontSkipInstructions.addData('space1.keys',space1.keys)
    if space1.keys != None:  # we had a response
        dontSkipInstructions.addData('space1.rt', space1.rt)
    dontSkipInstructions.addData('space1.started', space1.tStartRefresh)
    dontSkipInstructions.addData('space1.stopped', space1.tStopRefresh)
    # the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    instructionLoop = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('instructionTxtDE.csv'),
        seed=None, name='instructionLoop')
    thisExp.addLoop(instructionLoop)  # add the loop to the experiment
    thisInstructionLoop = instructionLoop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisInstructionLoop.rgb)
    if thisInstructionLoop != None:
        for paramName in thisInstructionLoop:
            exec('{} = thisInstructionLoop[paramName]'.format(paramName))
    
    for thisInstructionLoop in instructionLoop:
        currentLoop = instructionLoop
        # abbreviate parameter names if possible (e.g. rgb = thisInstructionLoop.rgb)
        if thisInstructionLoop != None:
            for paramName in thisInstructionLoop:
                exec('{} = thisInstructionLoop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Instr1"-------
        continueRoutine = True
        # update component parameters for each repeat
        Instruction_text.setText(instructions)
        space2.keys = []
        space2.rt = []
        _space2_allKeys = []
        # keep track of which components have finished
        Instr1Components = [Instruction_text, space2]
        for thisComponent in Instr1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Instr1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Instr1"-------
        while continueRoutine:
            # get current time
            t = Instr1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Instr1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Instruction_text* updates
            if Instruction_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Instruction_text.frameNStart = frameN  # exact frame index
                Instruction_text.tStart = t  # local t and not account for scr refresh
                Instruction_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Instruction_text, 'tStartRefresh')  # time at next scr refresh
                Instruction_text.setAutoDraw(True)
            
            # *space2* updates
            waitOnFlip = False
            if space2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                space2.frameNStart = frameN  # exact frame index
                space2.tStart = t  # local t and not account for scr refresh
                space2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(space2, 'tStartRefresh')  # time at next scr refresh
                space2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(space2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(space2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if space2.status == STARTED and not waitOnFlip:
                theseKeys = space2.getKeys(keyList=['b', 'y'], waitRelease=False)
                _space2_allKeys.extend(theseKeys)
                if len(_space2_allKeys):
                    space2.keys = _space2_allKeys[-1].name  # just the last key pressed
                    space2.rt = _space2_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Instr1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Instr1"-------
        for thisComponent in Instr1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        instructionLoop.addData('Instruction_text.started', Instruction_text.tStartRefresh)
        instructionLoop.addData('Instruction_text.stopped', Instruction_text.tStopRefresh)
        # check responses
        if space2.keys in ['', [], None]:  # No response was made
            space2.keys = None
        instructionLoop.addData('space2.keys',space2.keys)
        if space2.keys != None:  # we had a response
            instructionLoop.addData('space2.rt', space2.rt)
        instructionLoop.addData('space2.started', space2.tStartRefresh)
        instructionLoop.addData('space2.stopped', space2.tStopRefresh)
        # the Routine "Instr1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'instructionLoop'
    
    
    # set up handler to look after randomisation of conditions etc
    trials_Instr = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('trials_Int.csv', selection='0'),
        seed=None, name='trials_Instr')
    thisExp.addLoop(trials_Instr)  # add the loop to the experiment
    thisTrials_Instr = trials_Instr.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_Instr.rgb)
    if thisTrials_Instr != None:
        for paramName in thisTrials_Instr:
            exec('{} = thisTrials_Instr[paramName]'.format(paramName))
    
    for thisTrials_Instr in trials_Instr:
        currentLoop = trials_Instr
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_Instr.rgb)
        if thisTrials_Instr != None:
            for paramName in thisTrials_Instr:
                exec('{} = thisTrials_Instr[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial_Instr"-------
        continueRoutine = True
        # update component parameters for each repeat
        stim1_inst.setImage(stimulus1)
        stim2_inst.setImage(stimulus2)
        stim3_inst.setImage(stimulus3)
        stim4_inst.setImage(stimulus4)
        space3.keys = []
        space3.rt = []
        _space3_allKeys = []
        # keep track of which components have finished
        trial_InstrComponents = [stim1_inst, stim2_inst, stim3_inst, stim4_inst, trialExplanation, space3]
        for thisComponent in trial_InstrComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trial_InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial_Instr"-------
        while continueRoutine:
            # get current time
            t = trial_InstrClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trial_InstrClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim1_inst* updates
            if stim1_inst.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                stim1_inst.frameNStart = frameN  # exact frame index
                stim1_inst.tStart = t  # local t and not account for scr refresh
                stim1_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim1_inst, 'tStartRefresh')  # time at next scr refresh
                stim1_inst.setAutoDraw(True)
            
            # *stim2_inst* updates
            if stim2_inst.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                stim2_inst.frameNStart = frameN  # exact frame index
                stim2_inst.tStart = t  # local t and not account for scr refresh
                stim2_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim2_inst, 'tStartRefresh')  # time at next scr refresh
                stim2_inst.setAutoDraw(True)
            
            # *stim3_inst* updates
            if stim3_inst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim3_inst.frameNStart = frameN  # exact frame index
                stim3_inst.tStart = t  # local t and not account for scr refresh
                stim3_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim3_inst, 'tStartRefresh')  # time at next scr refresh
                stim3_inst.setAutoDraw(True)
            
            # *stim4_inst* updates
            if stim4_inst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim4_inst.frameNStart = frameN  # exact frame index
                stim4_inst.tStart = t  # local t and not account for scr refresh
                stim4_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim4_inst, 'tStartRefresh')  # time at next scr refresh
                stim4_inst.setAutoDraw(True)
            
            # *trialExplanation* updates
            if trialExplanation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trialExplanation.frameNStart = frameN  # exact frame index
                trialExplanation.tStart = t  # local t and not account for scr refresh
                trialExplanation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trialExplanation, 'tStartRefresh')  # time at next scr refresh
                trialExplanation.setAutoDraw(True)
            
            # *space3* updates
            waitOnFlip = False
            if space3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                space3.frameNStart = frameN  # exact frame index
                space3.tStart = t  # local t and not account for scr refresh
                space3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(space3, 'tStartRefresh')  # time at next scr refresh
                space3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(space3.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(space3.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if space3.status == STARTED and not waitOnFlip:
                theseKeys = space3.getKeys(keyList=['b', 'y'], waitRelease=False)
                _space3_allKeys.extend(theseKeys)
                if len(_space3_allKeys):
                    space3.keys = _space3_allKeys[-1].name  # just the last key pressed
                    space3.rt = _space3_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trial_InstrComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial_Instr"-------
        for thisComponent in trial_InstrComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_Instr.addData('stim1_inst.started', stim1_inst.tStartRefresh)
        trials_Instr.addData('stim1_inst.stopped', stim1_inst.tStopRefresh)
        trials_Instr.addData('stim2_inst.started', stim2_inst.tStartRefresh)
        trials_Instr.addData('stim2_inst.stopped', stim2_inst.tStopRefresh)
        trials_Instr.addData('stim3_inst.started', stim3_inst.tStartRefresh)
        trials_Instr.addData('stim3_inst.stopped', stim3_inst.tStopRefresh)
        trials_Instr.addData('stim4_inst.started', stim4_inst.tStartRefresh)
        trials_Instr.addData('stim4_inst.stopped', stim4_inst.tStopRefresh)
        trials_Instr.addData('trialExplanation.started', trialExplanation.tStartRefresh)
        trials_Instr.addData('trialExplanation.stopped', trialExplanation.tStopRefresh)
        # check responses
        if space3.keys in ['', [], None]:  # No response was made
            space3.keys = None
        trials_Instr.addData('space3.keys',space3.keys)
        if space3.keys != None:  # we had a response
            trials_Instr.addData('space3.rt', space3.rt)
        trials_Instr.addData('space3.started', space3.tStartRefresh)
        trials_Instr.addData('space3.stopped', space3.tStopRefresh)
        # the Routine "trial_Instr" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "masks_Instr"-------
        continueRoutine = True
        routineTimer.add(0.200000)
        # update component parameters for each repeat
        mask1_inst.setImage(mask1)
        mask2_inst.setImage(mask2)
        mask3_inst.setImage(mask3)
        mask4_inst.setImage(mask4)
        # keep track of which components have finished
        masks_InstrComponents = [mask1_inst, mask2_inst, mask3_inst, mask4_inst]
        for thisComponent in masks_InstrComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        masks_InstrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "masks_Instr"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = masks_InstrClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=masks_InstrClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *mask1_inst* updates
            if mask1_inst.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                mask1_inst.frameNStart = frameN  # exact frame index
                mask1_inst.tStart = t  # local t and not account for scr refresh
                mask1_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask1_inst, 'tStartRefresh')  # time at next scr refresh
                mask1_inst.setAutoDraw(True)
            if mask1_inst.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask1_inst.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask1_inst.tStop = t  # not accounting for scr refresh
                    mask1_inst.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask1_inst, 'tStopRefresh')  # time at next scr refresh
                    mask1_inst.setAutoDraw(False)
            
            # *mask2_inst* updates
            if mask2_inst.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                mask2_inst.frameNStart = frameN  # exact frame index
                mask2_inst.tStart = t  # local t and not account for scr refresh
                mask2_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask2_inst, 'tStartRefresh')  # time at next scr refresh
                mask2_inst.setAutoDraw(True)
            if mask2_inst.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask2_inst.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask2_inst.tStop = t  # not accounting for scr refresh
                    mask2_inst.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask2_inst, 'tStopRefresh')  # time at next scr refresh
                    mask2_inst.setAutoDraw(False)
            
            # *mask3_inst* updates
            if mask3_inst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mask3_inst.frameNStart = frameN  # exact frame index
                mask3_inst.tStart = t  # local t and not account for scr refresh
                mask3_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask3_inst, 'tStartRefresh')  # time at next scr refresh
                mask3_inst.setAutoDraw(True)
            if mask3_inst.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask3_inst.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask3_inst.tStop = t  # not accounting for scr refresh
                    mask3_inst.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask3_inst, 'tStopRefresh')  # time at next scr refresh
                    mask3_inst.setAutoDraw(False)
            
            # *mask4_inst* updates
            if mask4_inst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mask4_inst.frameNStart = frameN  # exact frame index
                mask4_inst.tStart = t  # local t and not account for scr refresh
                mask4_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask4_inst, 'tStartRefresh')  # time at next scr refresh
                mask4_inst.setAutoDraw(True)
            if mask4_inst.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask4_inst.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask4_inst.tStop = t  # not accounting for scr refresh
                    mask4_inst.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask4_inst, 'tStopRefresh')  # time at next scr refresh
                    mask4_inst.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in masks_InstrComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "masks_Instr"-------
        for thisComponent in masks_InstrComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_Instr.addData('mask1_inst.started', mask1_inst.tStartRefresh)
        trials_Instr.addData('mask1_inst.stopped', mask1_inst.tStopRefresh)
        trials_Instr.addData('mask2_inst.started', mask2_inst.tStartRefresh)
        trials_Instr.addData('mask2_inst.stopped', mask2_inst.tStopRefresh)
        trials_Instr.addData('mask3_inst.started', mask3_inst.tStartRefresh)
        trials_Instr.addData('mask3_inst.stopped', mask3_inst.tStopRefresh)
        trials_Instr.addData('mask4_inst.started', mask4_inst.tStartRefresh)
        trials_Instr.addData('mask4_inst.stopped', mask4_inst.tStopRefresh)
        
        # ------Prepare to start Routine "delayInst"-------
        continueRoutine = True
        # update component parameters for each repeat
        space4.keys = []
        space4.rt = []
        _space4_allKeys = []
        # keep track of which components have finished
        delayInstComponents = [fixDelay_2, delayExplanation, space4]
        for thisComponent in delayInstComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        delayInstClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "delayInst"-------
        while continueRoutine:
            # get current time
            t = delayInstClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=delayInstClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixDelay_2* updates
            if fixDelay_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                fixDelay_2.frameNStart = frameN  # exact frame index
                fixDelay_2.tStart = t  # local t and not account for scr refresh
                fixDelay_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixDelay_2, 'tStartRefresh')  # time at next scr refresh
                fixDelay_2.setAutoDraw(True)
            
            # *delayExplanation* updates
            if delayExplanation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                delayExplanation.frameNStart = frameN  # exact frame index
                delayExplanation.tStart = t  # local t and not account for scr refresh
                delayExplanation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(delayExplanation, 'tStartRefresh')  # time at next scr refresh
                delayExplanation.setAutoDraw(True)
            
            # *space4* updates
            waitOnFlip = False
            if space4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                space4.frameNStart = frameN  # exact frame index
                space4.tStart = t  # local t and not account for scr refresh
                space4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(space4, 'tStartRefresh')  # time at next scr refresh
                space4.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(space4.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(space4.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if space4.status == STARTED and not waitOnFlip:
                theseKeys = space4.getKeys(keyList=['b', 'y'], waitRelease=False)
                _space4_allKeys.extend(theseKeys)
                if len(_space4_allKeys):
                    space4.keys = _space4_allKeys[-1].name  # just the last key pressed
                    space4.rt = _space4_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in delayInstComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "delayInst"-------
        for thisComponent in delayInstComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_Instr.addData('fixDelay_2.started', fixDelay_2.tStartRefresh)
        trials_Instr.addData('fixDelay_2.stopped', fixDelay_2.tStopRefresh)
        trials_Instr.addData('delayExplanation.started', delayExplanation.tStartRefresh)
        trials_Instr.addData('delayExplanation.stopped', delayExplanation.tStopRefresh)
        # check responses
        if space4.keys in ['', [], None]:  # No response was made
            space4.keys = None
        trials_Instr.addData('space4.keys',space4.keys)
        if space4.keys != None:  # we had a response
            trials_Instr.addData('space4.rt', space4.rt)
        trials_Instr.addData('space4.started', space4.tStartRefresh)
        trials_Instr.addData('space4.stopped', space4.tStopRefresh)
        # the Routine "delayInst" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "responseInst"-------
        continueRoutine = True
        # update component parameters for each repeat
        probe_inst.setImage(probeIm)
        reponseInstr.keys = []
        reponseInstr.rt = []
        _reponseInstr_allKeys = []
        # keep track of which components have finished
        responseInstComponents = [probe_inst, fixProbe_inst, reponseInstr, probeInst]
        for thisComponent in responseInstComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        responseInstClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "responseInst"-------
        while continueRoutine:
            # get current time
            t = responseInstClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=responseInstClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *probe_inst* updates
            if probe_inst.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                probe_inst.frameNStart = frameN  # exact frame index
                probe_inst.tStart = t  # local t and not account for scr refresh
                probe_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(probe_inst, 'tStartRefresh')  # time at next scr refresh
                probe_inst.setAutoDraw(True)
            if probe_inst.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > probe_inst.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    probe_inst.tStop = t  # not accounting for scr refresh
                    probe_inst.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(probe_inst, 'tStopRefresh')  # time at next scr refresh
                    probe_inst.setAutoDraw(False)
            
            # *fixProbe_inst* updates
            if fixProbe_inst.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                fixProbe_inst.frameNStart = frameN  # exact frame index
                fixProbe_inst.tStart = t  # local t and not account for scr refresh
                fixProbe_inst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixProbe_inst, 'tStartRefresh')  # time at next scr refresh
                fixProbe_inst.setAutoDraw(True)
            
            # *reponseInstr* updates
            waitOnFlip = False
            if reponseInstr.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                reponseInstr.frameNStart = frameN  # exact frame index
                reponseInstr.tStart = t  # local t and not account for scr refresh
                reponseInstr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(reponseInstr, 'tStartRefresh')  # time at next scr refresh
                reponseInstr.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(reponseInstr.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(reponseInstr.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if reponseInstr.status == STARTED and not waitOnFlip:
                theseKeys = reponseInstr.getKeys(keyList=['b', 'y'], waitRelease=False)
                _reponseInstr_allKeys.extend(theseKeys)
                if len(_reponseInstr_allKeys):
                    reponseInstr.keys = _reponseInstr_allKeys[-1].name  # just the last key pressed
                    reponseInstr.rt = _reponseInstr_allKeys[-1].rt
                    # was this correct?
                    if (reponseInstr.keys == str(correctResp)) or (reponseInstr.keys == correctResp):
                        reponseInstr.corr = 1
                    else:
                        reponseInstr.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *probeInst* updates
            if probeInst.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                probeInst.frameNStart = frameN  # exact frame index
                probeInst.tStart = t  # local t and not account for scr refresh
                probeInst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(probeInst, 'tStartRefresh')  # time at next scr refresh
                probeInst.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in responseInstComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "responseInst"-------
        for thisComponent in responseInstComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_Instr.addData('probe_inst.started', probe_inst.tStartRefresh)
        trials_Instr.addData('probe_inst.stopped', probe_inst.tStopRefresh)
        trials_Instr.addData('fixProbe_inst.started', fixProbe_inst.tStartRefresh)
        trials_Instr.addData('fixProbe_inst.stopped', fixProbe_inst.tStopRefresh)
        # check responses
        if reponseInstr.keys in ['', [], None]:  # No response was made
            reponseInstr.keys = None
            # was no response the correct answer?!
            if str(correctResp).lower() == 'none':
               reponseInstr.corr = 1;  # correct non-response
            else:
               reponseInstr.corr = 0;  # failed to respond (incorrectly)
        # store data for trials_Instr (TrialHandler)
        trials_Instr.addData('reponseInstr.keys',reponseInstr.keys)
        trials_Instr.addData('reponseInstr.corr', reponseInstr.corr)
        if reponseInstr.keys != None:  # we had a response
            trials_Instr.addData('reponseInstr.rt', reponseInstr.rt)
        trials_Instr.addData('reponseInstr.started', reponseInstr.tStartRefresh)
        trials_Instr.addData('reponseInstr.stopped', reponseInstr.tStopRefresh)
        trials_Instr.addData('probeInst.started', probeInst.tStartRefresh)
        trials_Instr.addData('probeInst.stopped', probeInst.tStopRefresh)
        # the Routine "responseInst" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "reward"-------
        continueRoutine = True
        # update component parameters for each repeat
        space5.keys = []
        space5.rt = []
        _space5_allKeys = []
        # keep track of which components have finished
        rewardComponents = [rewardInst, space5]
        for thisComponent in rewardComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        rewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "reward"-------
        while continueRoutine:
            # get current time
            t = rewardClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=rewardClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *rewardInst* updates
            if rewardInst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                rewardInst.frameNStart = frameN  # exact frame index
                rewardInst.tStart = t  # local t and not account for scr refresh
                rewardInst.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(rewardInst, 'tStartRefresh')  # time at next scr refresh
                rewardInst.setAutoDraw(True)
            
            # *space5* updates
            waitOnFlip = False
            if space5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                space5.frameNStart = frameN  # exact frame index
                space5.tStart = t  # local t and not account for scr refresh
                space5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(space5, 'tStartRefresh')  # time at next scr refresh
                space5.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(space5.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(space5.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if space5.status == STARTED and not waitOnFlip:
                theseKeys = space5.getKeys(keyList=['b', 'y'], waitRelease=False)
                _space5_allKeys.extend(theseKeys)
                if len(_space5_allKeys):
                    space5.keys = _space5_allKeys[-1].name  # just the last key pressed
                    space5.rt = _space5_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in rewardComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "reward"-------
        for thisComponent in rewardComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials_Instr.addData('rewardInst.started', rewardInst.tStartRefresh)
        trials_Instr.addData('rewardInst.stopped', rewardInst.tStopRefresh)
        # check responses
        if space5.keys in ['', [], None]:  # No response was made
            space5.keys = None
        trials_Instr.addData('space5.keys',space5.keys)
        if space5.keys != None:  # we had a response
            trials_Instr.addData('space5.rt', space5.rt)
        trials_Instr.addData('space5.started', space5.tStartRefresh)
        trials_Instr.addData('space5.stopped', space5.tStopRefresh)
        # the Routine "reward" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_Instr'
    
    
    # set up handler to look after randomisation of conditions etc
    repeat_InstrTrials = data.TrialHandler(nReps=999, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='repeat_InstrTrials')
    thisExp.addLoop(repeat_InstrTrials)  # add the loop to the experiment
    thisRepeat_InstrTrial = repeat_InstrTrials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat_InstrTrial.rgb)
    if thisRepeat_InstrTrial != None:
        for paramName in thisRepeat_InstrTrial:
            exec('{} = thisRepeat_InstrTrial[paramName]'.format(paramName))
    
    for thisRepeat_InstrTrial in repeat_InstrTrials:
        currentLoop = repeat_InstrTrials
        # abbreviate parameter names if possible (e.g. rgb = thisRepeat_InstrTrial.rgb)
        if thisRepeat_InstrTrial != None:
            for paramName in thisRepeat_InstrTrial:
                exec('{} = thisRepeat_InstrTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "reminderButtons"-------
        continueRoutine = True
        # update component parameters for each repeat
        space6.keys = []
        space6.rt = []
        _space6_allKeys = []
        number_correct = 0
        ntotal=0
        # keep track of which components have finished
        reminderButtonsComponents = [Button_reminder, space6]
        for thisComponent in reminderButtonsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        reminderButtonsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "reminderButtons"-------
        while continueRoutine:
            # get current time
            t = reminderButtonsClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=reminderButtonsClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *Button_reminder* updates
            if Button_reminder.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Button_reminder.frameNStart = frameN  # exact frame index
                Button_reminder.tStart = t  # local t and not account for scr refresh
                Button_reminder.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Button_reminder, 'tStartRefresh')  # time at next scr refresh
                Button_reminder.setAutoDraw(True)
            
            # *space6* updates
            waitOnFlip = False
            if space6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                space6.frameNStart = frameN  # exact frame index
                space6.tStart = t  # local t and not account for scr refresh
                space6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(space6, 'tStartRefresh')  # time at next scr refresh
                space6.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(space6.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(space6.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if space6.status == STARTED and not waitOnFlip:
                theseKeys = space6.getKeys(keyList=['b', 'y'], waitRelease=False)
                _space6_allKeys.extend(theseKeys)
                if len(_space6_allKeys):
                    space6.keys = _space6_allKeys[-1].name  # just the last key pressed
                    space6.rt = _space6_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in reminderButtonsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "reminderButtons"-------
        for thisComponent in reminderButtonsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        repeat_InstrTrials.addData('Button_reminder.started', Button_reminder.tStartRefresh)
        repeat_InstrTrials.addData('Button_reminder.stopped', Button_reminder.tStopRefresh)
        # check responses
        if space6.keys in ['', [], None]:  # No response was made
            space6.keys = None
        repeat_InstrTrials.addData('space6.keys',space6.keys)
        if space6.keys != None:  # we had a response
            repeat_InstrTrials.addData('space6.rt', space6.rt)
        repeat_InstrTrials.addData('space6.started', space6.tStartRefresh)
        repeat_InstrTrials.addData('space6.stopped', space6.tStopRefresh)
        # the Routine "reminderButtons" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials_instr2 = data.TrialHandler(nReps=1, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('trials_Int.csv', selection='1:9'),
            seed=None, name='trials_instr2')
        thisExp.addLoop(trials_instr2)  # add the loop to the experiment
        thisTrials_instr2 = trials_instr2.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_instr2.rgb)
        if thisTrials_instr2 != None:
            for paramName in thisTrials_instr2:
                exec('{} = thisTrials_instr2[paramName]'.format(paramName))
        
        for thisTrials_instr2 in trials_instr2:
            currentLoop = trials_instr2
            # abbreviate parameter names if possible (e.g. rgb = thisTrials_instr2.rgb)
            if thisTrials_instr2 != None:
                for paramName in thisTrials_instr2:
                    exec('{} = thisTrials_instr2[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "trialBegBlank_practice"-------
            continueRoutine = True
            routineTimer.add(6.000000)
            # update component parameters for each repeat
            # keep track of which components have finished
            trialBegBlank_practiceComponents = [fixStartTrial_2]
            for thisComponent in trialBegBlank_practiceComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            trialBegBlank_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "trialBegBlank_practice"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = trialBegBlank_practiceClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=trialBegBlank_practiceClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *fixStartTrial_2* updates
                if fixStartTrial_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fixStartTrial_2.frameNStart = frameN  # exact frame index
                    fixStartTrial_2.tStart = t  # local t and not account for scr refresh
                    fixStartTrial_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixStartTrial_2, 'tStartRefresh')  # time at next scr refresh
                    fixStartTrial_2.setAutoDraw(True)
                if fixStartTrial_2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fixStartTrial_2.tStartRefresh + 6-frameTolerance:
                        # keep track of stop time/frame for later
                        fixStartTrial_2.tStop = t  # not accounting for scr refresh
                        fixStartTrial_2.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(fixStartTrial_2, 'tStopRefresh')  # time at next scr refresh
                        fixStartTrial_2.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in trialBegBlank_practiceComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "trialBegBlank_practice"-------
            for thisComponent in trialBegBlank_practiceComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            trials_instr2.addData('fixStartTrial_2.started', fixStartTrial_2.tStartRefresh)
            trials_instr2.addData('fixStartTrial_2.stopped', fixStartTrial_2.tStopRefresh)
            
            # ------Prepare to start Routine "trial_practice"-------
            continueRoutine = True
            routineTimer.add(20.700000)
            # update component parameters for each repeat
            stim1_Practice.setImage(stimulus1)
            stim2_Practice.setImage(stimulus2)
            stim3_Practice.setImage(stimulus3)
            stim4_Practice.setImage(stimulus4)
            probe_Practice.setImage(probeIm)
            keyResp_Practice.keys = []
            keyResp_Practice.rt = []
            _keyResp_Practice_allKeys = []
            mask1_prac.setImage(mask1)
            mask2_prac.setImage(mask2)
            mask3_prac.setImage(mask3)
            mask4_prac.setImage(mask4)
            # keep track of which components have finished
            trial_practiceComponents = [stim1_Practice, stim2_Practice, stim3_Practice, stim4_Practice, fixDelay_Practice, probe_Practice, fixProbe_Practice, keyResp_Practice, mask1_prac, mask2_prac, mask3_prac, mask4_prac]
            for thisComponent in trial_practiceComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            trial_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "trial_practice"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = trial_practiceClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=trial_practiceClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *stim1_Practice* updates
                if stim1_Practice.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    stim1_Practice.frameNStart = frameN  # exact frame index
                    stim1_Practice.tStart = t  # local t and not account for scr refresh
                    stim1_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stim1_Practice, 'tStartRefresh')  # time at next scr refresh
                    stim1_Practice.setAutoDraw(True)
                if stim1_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > stim1_Practice.tStartRefresh + 3.3-frameTolerance:
                        # keep track of stop time/frame for later
                        stim1_Practice.tStop = t  # not accounting for scr refresh
                        stim1_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(stim1_Practice, 'tStopRefresh')  # time at next scr refresh
                        stim1_Practice.setAutoDraw(False)
                
                # *stim2_Practice* updates
                if stim2_Practice.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    stim2_Practice.frameNStart = frameN  # exact frame index
                    stim2_Practice.tStart = t  # local t and not account for scr refresh
                    stim2_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stim2_Practice, 'tStartRefresh')  # time at next scr refresh
                    stim2_Practice.setAutoDraw(True)
                if stim2_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > stim2_Practice.tStartRefresh + 3.3-frameTolerance:
                        # keep track of stop time/frame for later
                        stim2_Practice.tStop = t  # not accounting for scr refresh
                        stim2_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(stim2_Practice, 'tStopRefresh')  # time at next scr refresh
                        stim2_Practice.setAutoDraw(False)
                
                # *stim3_Practice* updates
                if stim3_Practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    stim3_Practice.frameNStart = frameN  # exact frame index
                    stim3_Practice.tStart = t  # local t and not account for scr refresh
                    stim3_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stim3_Practice, 'tStartRefresh')  # time at next scr refresh
                    stim3_Practice.setAutoDraw(True)
                if stim3_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > stim3_Practice.tStartRefresh + 3.3-frameTolerance:
                        # keep track of stop time/frame for later
                        stim3_Practice.tStop = t  # not accounting for scr refresh
                        stim3_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(stim3_Practice, 'tStopRefresh')  # time at next scr refresh
                        stim3_Practice.setAutoDraw(False)
                
                # *stim4_Practice* updates
                if stim4_Practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    stim4_Practice.frameNStart = frameN  # exact frame index
                    stim4_Practice.tStart = t  # local t and not account for scr refresh
                    stim4_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(stim4_Practice, 'tStartRefresh')  # time at next scr refresh
                    stim4_Practice.setAutoDraw(True)
                if stim4_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > stim4_Practice.tStartRefresh + 3.3-frameTolerance:
                        # keep track of stop time/frame for later
                        stim4_Practice.tStop = t  # not accounting for scr refresh
                        stim4_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(stim4_Practice, 'tStopRefresh')  # time at next scr refresh
                        stim4_Practice.setAutoDraw(False)
                
                # *fixDelay_Practice* updates
                if fixDelay_Practice.status == NOT_STARTED and tThisFlip >= 3.5-frameTolerance:
                    # keep track of start time/frame for later
                    fixDelay_Practice.frameNStart = frameN  # exact frame index
                    fixDelay_Practice.tStart = t  # local t and not account for scr refresh
                    fixDelay_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixDelay_Practice, 'tStartRefresh')  # time at next scr refresh
                    fixDelay_Practice.setAutoDraw(True)
                if fixDelay_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fixDelay_Practice.tStartRefresh + 13-frameTolerance:
                        # keep track of stop time/frame for later
                        fixDelay_Practice.tStop = t  # not accounting for scr refresh
                        fixDelay_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(fixDelay_Practice, 'tStopRefresh')  # time at next scr refresh
                        fixDelay_Practice.setAutoDraw(False)
                
                # *probe_Practice* updates
                if probe_Practice.status == NOT_STARTED and tThisFlip >= 16.5-frameTolerance:
                    # keep track of start time/frame for later
                    probe_Practice.frameNStart = frameN  # exact frame index
                    probe_Practice.tStart = t  # local t and not account for scr refresh
                    probe_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(probe_Practice, 'tStartRefresh')  # time at next scr refresh
                    probe_Practice.setAutoDraw(True)
                if probe_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > probe_Practice.tStartRefresh + 1.2-frameTolerance:
                        # keep track of stop time/frame for later
                        probe_Practice.tStop = t  # not accounting for scr refresh
                        probe_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(probe_Practice, 'tStopRefresh')  # time at next scr refresh
                        probe_Practice.setAutoDraw(False)
                
                # *fixProbe_Practice* updates
                if fixProbe_Practice.status == NOT_STARTED and tThisFlip >= 17.7-frameTolerance:
                    # keep track of start time/frame for later
                    fixProbe_Practice.frameNStart = frameN  # exact frame index
                    fixProbe_Practice.tStart = t  # local t and not account for scr refresh
                    fixProbe_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixProbe_Practice, 'tStartRefresh')  # time at next scr refresh
                    fixProbe_Practice.setAutoDraw(True)
                if fixProbe_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fixProbe_Practice.tStartRefresh + 3-frameTolerance:
                        # keep track of stop time/frame for later
                        fixProbe_Practice.tStop = t  # not accounting for scr refresh
                        fixProbe_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(fixProbe_Practice, 'tStopRefresh')  # time at next scr refresh
                        fixProbe_Practice.setAutoDraw(False)
                
                # *keyResp_Practice* updates
                waitOnFlip = False
                if keyResp_Practice.status == NOT_STARTED and tThisFlip >= 16.5-frameTolerance:
                    # keep track of start time/frame for later
                    keyResp_Practice.frameNStart = frameN  # exact frame index
                    keyResp_Practice.tStart = t  # local t and not account for scr refresh
                    keyResp_Practice.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(keyResp_Practice, 'tStartRefresh')  # time at next scr refresh
                    keyResp_Practice.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(keyResp_Practice.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(keyResp_Practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if keyResp_Practice.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > keyResp_Practice.tStartRefresh + 4.2-frameTolerance:
                        # keep track of stop time/frame for later
                        keyResp_Practice.tStop = t  # not accounting for scr refresh
                        keyResp_Practice.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(keyResp_Practice, 'tStopRefresh')  # time at next scr refresh
                        keyResp_Practice.status = FINISHED
                if keyResp_Practice.status == STARTED and not waitOnFlip:
                    theseKeys = keyResp_Practice.getKeys(keyList=['b', 'y', 'None'], waitRelease=False)
                    _keyResp_Practice_allKeys.extend(theseKeys)
                    if len(_keyResp_Practice_allKeys):
                        keyResp_Practice.keys = _keyResp_Practice_allKeys[0].name  # just the first key pressed
                        keyResp_Practice.rt = _keyResp_Practice_allKeys[0].rt
                        # was this correct?
                        if (keyResp_Practice.keys == str(correctResp)) or (keyResp_Practice.keys == correctResp):
                            keyResp_Practice.corr = 1
                        else:
                            keyResp_Practice.corr = 0
                
                # *mask1_prac* updates
                if mask1_prac.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                    # keep track of start time/frame for later
                    mask1_prac.frameNStart = frameN  # exact frame index
                    mask1_prac.tStart = t  # local t and not account for scr refresh
                    mask1_prac.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mask1_prac, 'tStartRefresh')  # time at next scr refresh
                    mask1_prac.setAutoDraw(True)
                if mask1_prac.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > mask1_prac.tStartRefresh + 0.2-frameTolerance:
                        # keep track of stop time/frame for later
                        mask1_prac.tStop = t  # not accounting for scr refresh
                        mask1_prac.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(mask1_prac, 'tStopRefresh')  # time at next scr refresh
                        mask1_prac.setAutoDraw(False)
                
                # *mask2_prac* updates
                if mask2_prac.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                    # keep track of start time/frame for later
                    mask2_prac.frameNStart = frameN  # exact frame index
                    mask2_prac.tStart = t  # local t and not account for scr refresh
                    mask2_prac.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mask2_prac, 'tStartRefresh')  # time at next scr refresh
                    mask2_prac.setAutoDraw(True)
                if mask2_prac.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > mask2_prac.tStartRefresh + 0.2-frameTolerance:
                        # keep track of stop time/frame for later
                        mask2_prac.tStop = t  # not accounting for scr refresh
                        mask2_prac.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(mask2_prac, 'tStopRefresh')  # time at next scr refresh
                        mask2_prac.setAutoDraw(False)
                
                # *mask3_prac* updates
                if mask3_prac.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                    # keep track of start time/frame for later
                    mask3_prac.frameNStart = frameN  # exact frame index
                    mask3_prac.tStart = t  # local t and not account for scr refresh
                    mask3_prac.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mask3_prac, 'tStartRefresh')  # time at next scr refresh
                    mask3_prac.setAutoDraw(True)
                if mask3_prac.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > mask3_prac.tStartRefresh + 0.2-frameTolerance:
                        # keep track of stop time/frame for later
                        mask3_prac.tStop = t  # not accounting for scr refresh
                        mask3_prac.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(mask3_prac, 'tStopRefresh')  # time at next scr refresh
                        mask3_prac.setAutoDraw(False)
                
                # *mask4_prac* updates
                if mask4_prac.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                    # keep track of start time/frame for later
                    mask4_prac.frameNStart = frameN  # exact frame index
                    mask4_prac.tStart = t  # local t and not account for scr refresh
                    mask4_prac.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(mask4_prac, 'tStartRefresh')  # time at next scr refresh
                    mask4_prac.setAutoDraw(True)
                if mask4_prac.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > mask4_prac.tStartRefresh + 0.2-frameTolerance:
                        # keep track of stop time/frame for later
                        mask4_prac.tStop = t  # not accounting for scr refresh
                        mask4_prac.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(mask4_prac, 'tStopRefresh')  # time at next scr refresh
                        mask4_prac.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in trial_practiceComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "trial_practice"-------
            for thisComponent in trial_practiceComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            trials_instr2.addData('stim1_Practice.started', stim1_Practice.tStartRefresh)
            trials_instr2.addData('stim1_Practice.stopped', stim1_Practice.tStopRefresh)
            trials_instr2.addData('stim2_Practice.started', stim2_Practice.tStartRefresh)
            trials_instr2.addData('stim2_Practice.stopped', stim2_Practice.tStopRefresh)
            trials_instr2.addData('stim3_Practice.started', stim3_Practice.tStartRefresh)
            trials_instr2.addData('stim3_Practice.stopped', stim3_Practice.tStopRefresh)
            trials_instr2.addData('stim4_Practice.started', stim4_Practice.tStartRefresh)
            trials_instr2.addData('stim4_Practice.stopped', stim4_Practice.tStopRefresh)
            trials_instr2.addData('fixDelay_Practice.started', fixDelay_Practice.tStartRefresh)
            trials_instr2.addData('fixDelay_Practice.stopped', fixDelay_Practice.tStopRefresh)
            trials_instr2.addData('probe_Practice.started', probe_Practice.tStartRefresh)
            trials_instr2.addData('probe_Practice.stopped', probe_Practice.tStopRefresh)
            trials_instr2.addData('fixProbe_Practice.started', fixProbe_Practice.tStartRefresh)
            trials_instr2.addData('fixProbe_Practice.stopped', fixProbe_Practice.tStopRefresh)
            # check responses
            if keyResp_Practice.keys in ['', [], None]:  # No response was made
                keyResp_Practice.keys = None
                # was no response the correct answer?!
                if str(correctResp).lower() == 'none':
                   keyResp_Practice.corr = 1;  # correct non-response
                else:
                   keyResp_Practice.corr = 0;  # failed to respond (incorrectly)
            # store data for trials_instr2 (TrialHandler)
            trials_instr2.addData('keyResp_Practice.keys',keyResp_Practice.keys)
            trials_instr2.addData('keyResp_Practice.corr', keyResp_Practice.corr)
            if keyResp_Practice.keys != None:  # we had a response
                trials_instr2.addData('keyResp_Practice.rt', keyResp_Practice.rt)
            trials_instr2.addData('keyResp_Practice.started', keyResp_Practice.tStartRefresh)
            trials_instr2.addData('keyResp_Practice.stopped', keyResp_Practice.tStopRefresh)
            trials_instr2.addData('mask1_prac.started', mask1_prac.tStartRefresh)
            trials_instr2.addData('mask1_prac.stopped', mask1_prac.tStopRefresh)
            trials_instr2.addData('mask2_prac.started', mask2_prac.tStartRefresh)
            trials_instr2.addData('mask2_prac.stopped', mask2_prac.tStopRefresh)
            trials_instr2.addData('mask3_prac.started', mask3_prac.tStartRefresh)
            trials_instr2.addData('mask3_prac.stopped', mask3_prac.tStopRefresh)
            trials_instr2.addData('mask4_prac.started', mask4_prac.tStartRefresh)
            trials_instr2.addData('mask4_prac.stopped', mask4_prac.tStopRefresh)
            
            # ------Prepare to start Routine "feedback_2"-------
            continueRoutine = True
            routineTimer.add(0.800000)
            # update component parameters for each repeat
            if keyResp_Practice.corr:
                msg="Richtige"
                number_correct = number_correct+1
                ntotal=ntotal+1
            else:
                msg="Falsch"
                ntotal=ntotal+1
            feedbackText.setText(msg)
            # keep track of which components have finished
            feedback_2Components = [feedbackText]
            for thisComponent in feedback_2Components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            feedback_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "feedback_2"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = feedback_2Clock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=feedback_2Clock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *feedbackText* updates
                if feedbackText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    feedbackText.frameNStart = frameN  # exact frame index
                    feedbackText.tStart = t  # local t and not account for scr refresh
                    feedbackText.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(feedbackText, 'tStartRefresh')  # time at next scr refresh
                    feedbackText.setAutoDraw(True)
                if feedbackText.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > feedbackText.tStartRefresh + 0.8-frameTolerance:
                        # keep track of stop time/frame for later
                        feedbackText.tStop = t  # not accounting for scr refresh
                        feedbackText.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(feedbackText, 'tStopRefresh')  # time at next scr refresh
                        feedbackText.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in feedback_2Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "feedback_2"-------
            for thisComponent in feedback_2Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            trials_instr2.addData('feedbackText.started', feedbackText.tStartRefresh)
            trials_instr2.addData('feedbackText.stopped', feedbackText.tStopRefresh)
            percent_correct = str(round(number_correct/ntotal*100,2))
            thisExp.nextEntry()
            
        # completed 1 repeats of 'trials_instr2'
        
        
        # ------Prepare to start Routine "feedbackTest"-------
        continueRoutine = True
        # update component parameters for each repeat
        key_resp_5.keys = []
        key_resp_5.rt = []
        _key_resp_5_allKeys = []
        text_7.setText(' Wenn du über 70% Richtig hast kannst du mit dem eigentlichen Experiment beginnen. Ansonsten musst du noch etwas mehr üben. Du hattest '+percent_correct+'% richtig.')
        if number_correct/(trials_instr2.nTotal) >= 0.63:
            repeat_InstrTrials.finished = True
        # keep track of which components have finished
        feedbackTestComponents = [key_resp_5, text_7]
        for thisComponent in feedbackTestComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedbackTestClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedbackTest"-------
        while continueRoutine:
            # get current time
            t = feedbackTestClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedbackTestClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *key_resp_5* updates
            waitOnFlip = False
            if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_5.frameNStart = frameN  # exact frame index
                key_resp_5.tStart = t  # local t and not account for scr refresh
                key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
                key_resp_5.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_5.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_5.getKeys(keyList=['b', 'y'], waitRelease=False)
                _key_resp_5_allKeys.extend(theseKeys)
                if len(_key_resp_5_allKeys):
                    key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
                    key_resp_5.rt = _key_resp_5_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *text_7* updates
            if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_7.frameNStart = frameN  # exact frame index
                text_7.tStart = t  # local t and not account for scr refresh
                text_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
                text_7.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackTestComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedbackTest"-------
        for thisComponent in feedbackTestComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if key_resp_5.keys in ['', [], None]:  # No response was made
            key_resp_5.keys = None
        repeat_InstrTrials.addData('key_resp_5.keys',key_resp_5.keys)
        if key_resp_5.keys != None:  # we had a response
            repeat_InstrTrials.addData('key_resp_5.rt', key_resp_5.rt)
        repeat_InstrTrials.addData('key_resp_5.started', key_resp_5.tStartRefresh)
        repeat_InstrTrials.addData('key_resp_5.stopped', key_resp_5.tStopRefresh)
        repeat_InstrTrials.addData('text_7.started', text_7.tStartRefresh)
        repeat_InstrTrials.addData('text_7.stopped', text_7.tStopRefresh)
        # the Routine "feedbackTest" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 999 repeats of 'repeat_InstrTrials'
    
    thisExp.nextEntry()
    
# completed expInfo['instructions'] repeats of 'dontSkipInstructions'


# set up handler to look after randomisation of conditions etc
runReal = data.TrialHandler(nReps=expInfo['realRuns'], method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='runReal')
thisExp.addLoop(runReal)  # add the loop to the experiment
thisRunReal = runReal.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRunReal.rgb)
if thisRunReal != None:
    for paramName in thisRunReal:
        exec('{} = thisRunReal[paramName]'.format(paramName))

for thisRunReal in runReal:
    currentLoop = runReal
    # abbreviate parameter names if possible (e.g. rgb = thisRunReal.rgb)
    if thisRunReal != None:
        for paramName in thisRunReal:
            exec('{} = thisRunReal[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Before_run"-------
    continueRoutine = True
    # update component parameters for each repeat
    text_run.setText('Der nächste Durchgang startet gleich ...')
    trigger1.keys = []
    trigger1.rt = []
    _trigger1_allKeys = []
    number_correct = 0
    ntotal=0
    # keep track of which components have finished
    Before_runComponents = [text_run, trigger1]
    for thisComponent in Before_runComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Before_runClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Before_run"-------
    while continueRoutine:
        # get current time
        t = Before_runClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Before_runClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_run* updates
        if text_run.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_run.frameNStart = frameN  # exact frame index
            text_run.tStart = t  # local t and not account for scr refresh
            text_run.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_run, 'tStartRefresh')  # time at next scr refresh
            text_run.setAutoDraw(True)
        
        # *trigger1* updates
        waitOnFlip = False
        if trigger1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trigger1.frameNStart = frameN  # exact frame index
            trigger1.tStart = t  # local t and not account for scr refresh
            trigger1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trigger1, 'tStartRefresh')  # time at next scr refresh
            trigger1.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(trigger1.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(trigger1.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if trigger1.status == STARTED and not waitOnFlip:
            theseKeys = trigger1.getKeys(keyList=['t'], waitRelease=False)
            _trigger1_allKeys.extend(theseKeys)
            if len(_trigger1_allKeys):
                trigger1.keys = _trigger1_allKeys[-1].name  # just the last key pressed
                trigger1.rt = _trigger1_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Before_runComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Before_run"-------
    for thisComponent in Before_runComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    runReal.addData('text_run.started', text_run.tStartRefresh)
    runReal.addData('text_run.stopped', text_run.tStopRefresh)
    # check responses
    if trigger1.keys in ['', [], None]:  # No response was made
        trigger1.keys = None
    runReal.addData('trigger1.keys',trigger1.keys)
    if trigger1.keys != None:  # we had a response
        runReal.addData('trigger1.rt', trigger1.rt)
    runReal.addData('trigger1.started', trigger1.tStartRefresh)
    runReal.addData('trigger1.stopped', trigger1.tStopRefresh)
    # the Routine "Before_run" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "blankStart"-------
    continueRoutine = True
    routineTimer.add(10.000000)
    # update component parameters for each repeat
    # keep track of which components have finished
    blankStartComponents = [fixStart]
    for thisComponent in blankStartComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    blankStartClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "blankStart"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = blankStartClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=blankStartClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixStart* updates
        if fixStart.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            fixStart.frameNStart = frameN  # exact frame index
            fixStart.tStart = t  # local t and not account for scr refresh
            fixStart.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixStart, 'tStartRefresh')  # time at next scr refresh
            fixStart.setAutoDraw(True)
        if fixStart.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixStart.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                fixStart.tStop = t  # not accounting for scr refresh
                fixStart.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixStart, 'tStopRefresh')  # time at next scr refresh
                fixStart.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blankStartComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "blankStart"-------
    for thisComponent in blankStartComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    runReal.addData('fixStart.started', fixStart.tStartRefresh)
    runReal.addData('fixStart.stopped', fixStart.tStopRefresh)
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(expInfo['runNumber']),
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        routineTimer.add(20.700000)
        # update component parameters for each repeat
        stim1.setImage(stimulus1)
        stim2.setImage(stimulus2)
        stim3.setImage(stimulus3)
        stim4.setImage(stimulus4)
        probe.setImage(probeIm)
        keyResp.keys = []
        keyResp.rt = []
        _keyResp_allKeys = []
        if trials.thisN == 0:
            number_correct = 0
        mask1_run.setImage(mask1)
        mask2_prac_2.setImage(mask2)
        mask3_run.setImage(mask3)
        mask4_run.setImage(mask4)
        # keep track of which components have finished
        trialComponents = [stim1, stim2, stim3, stim4, fixDelay, probe, fixProbe, keyResp, mask1_run, mask2_prac_2, mask3_run, mask4_run]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stim1* updates
            if stim1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                stim1.frameNStart = frameN  # exact frame index
                stim1.tStart = t  # local t and not account for scr refresh
                stim1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim1, 'tStartRefresh')  # time at next scr refresh
                stim1.setAutoDraw(True)
            if stim1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim1.tStartRefresh + 3.3-frameTolerance:
                    # keep track of stop time/frame for later
                    stim1.tStop = t  # not accounting for scr refresh
                    stim1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim1, 'tStopRefresh')  # time at next scr refresh
                    stim1.setAutoDraw(False)
            
            # *stim2* updates
            if stim2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                stim2.frameNStart = frameN  # exact frame index
                stim2.tStart = t  # local t and not account for scr refresh
                stim2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim2, 'tStartRefresh')  # time at next scr refresh
                stim2.setAutoDraw(True)
            if stim2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim2.tStartRefresh + 3.3-frameTolerance:
                    # keep track of stop time/frame for later
                    stim2.tStop = t  # not accounting for scr refresh
                    stim2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim2, 'tStopRefresh')  # time at next scr refresh
                    stim2.setAutoDraw(False)
            
            # *stim3* updates
            if stim3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim3.frameNStart = frameN  # exact frame index
                stim3.tStart = t  # local t and not account for scr refresh
                stim3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim3, 'tStartRefresh')  # time at next scr refresh
                stim3.setAutoDraw(True)
            if stim3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim3.tStartRefresh + 3.3-frameTolerance:
                    # keep track of stop time/frame for later
                    stim3.tStop = t  # not accounting for scr refresh
                    stim3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim3, 'tStopRefresh')  # time at next scr refresh
                    stim3.setAutoDraw(False)
            
            # *stim4* updates
            if stim4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stim4.frameNStart = frameN  # exact frame index
                stim4.tStart = t  # local t and not account for scr refresh
                stim4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim4, 'tStartRefresh')  # time at next scr refresh
                stim4.setAutoDraw(True)
            if stim4.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim4.tStartRefresh + 3.3-frameTolerance:
                    # keep track of stop time/frame for later
                    stim4.tStop = t  # not accounting for scr refresh
                    stim4.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(stim4, 'tStopRefresh')  # time at next scr refresh
                    stim4.setAutoDraw(False)
            
            # *fixDelay* updates
            if fixDelay.status == NOT_STARTED and tThisFlip >= 3.5-frameTolerance:
                # keep track of start time/frame for later
                fixDelay.frameNStart = frameN  # exact frame index
                fixDelay.tStart = t  # local t and not account for scr refresh
                fixDelay.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixDelay, 'tStartRefresh')  # time at next scr refresh
                fixDelay.setAutoDraw(True)
            if fixDelay.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixDelay.tStartRefresh + 13-frameTolerance:
                    # keep track of stop time/frame for later
                    fixDelay.tStop = t  # not accounting for scr refresh
                    fixDelay.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixDelay, 'tStopRefresh')  # time at next scr refresh
                    fixDelay.setAutoDraw(False)
            
            # *probe* updates
            if probe.status == NOT_STARTED and tThisFlip >= 16.5-frameTolerance:
                # keep track of start time/frame for later
                probe.frameNStart = frameN  # exact frame index
                probe.tStart = t  # local t and not account for scr refresh
                probe.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(probe, 'tStartRefresh')  # time at next scr refresh
                probe.setAutoDraw(True)
            if probe.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > probe.tStartRefresh + 1.2-frameTolerance:
                    # keep track of stop time/frame for later
                    probe.tStop = t  # not accounting for scr refresh
                    probe.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(probe, 'tStopRefresh')  # time at next scr refresh
                    probe.setAutoDraw(False)
            
            # *fixProbe* updates
            if fixProbe.status == NOT_STARTED and tThisFlip >= 17.7-frameTolerance:
                # keep track of start time/frame for later
                fixProbe.frameNStart = frameN  # exact frame index
                fixProbe.tStart = t  # local t and not account for scr refresh
                fixProbe.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixProbe, 'tStartRefresh')  # time at next scr refresh
                fixProbe.setAutoDraw(True)
            if fixProbe.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixProbe.tStartRefresh + 3-frameTolerance:
                    # keep track of stop time/frame for later
                    fixProbe.tStop = t  # not accounting for scr refresh
                    fixProbe.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixProbe, 'tStopRefresh')  # time at next scr refresh
                    fixProbe.setAutoDraw(False)
            
            # *keyResp* updates
            waitOnFlip = False
            if keyResp.status == NOT_STARTED and tThisFlip >= 16.5-frameTolerance:
                # keep track of start time/frame for later
                keyResp.frameNStart = frameN  # exact frame index
                keyResp.tStart = t  # local t and not account for scr refresh
                keyResp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(keyResp, 'tStartRefresh')  # time at next scr refresh
                keyResp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(keyResp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if keyResp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > keyResp.tStartRefresh + 4.2-frameTolerance:
                    # keep track of stop time/frame for later
                    keyResp.tStop = t  # not accounting for scr refresh
                    keyResp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(keyResp, 'tStopRefresh')  # time at next scr refresh
                    keyResp.status = FINISHED
            if keyResp.status == STARTED and not waitOnFlip:
                theseKeys = keyResp.getKeys(keyList=['b', 'y', 'None'], waitRelease=False)
                _keyResp_allKeys.extend(theseKeys)
                if len(_keyResp_allKeys):
                    keyResp.keys = _keyResp_allKeys[0].name  # just the first key pressed
                    keyResp.rt = _keyResp_allKeys[0].rt
                    # was this correct?
                    if (keyResp.keys == str(correctResp)) or (keyResp.keys == correctResp):
                        keyResp.corr = 1
                    else:
                        keyResp.corr = 0
            
            # *mask1_run* updates
            if mask1_run.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                # keep track of start time/frame for later
                mask1_run.frameNStart = frameN  # exact frame index
                mask1_run.tStart = t  # local t and not account for scr refresh
                mask1_run.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask1_run, 'tStartRefresh')  # time at next scr refresh
                mask1_run.setAutoDraw(True)
            if mask1_run.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask1_run.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask1_run.tStop = t  # not accounting for scr refresh
                    mask1_run.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask1_run, 'tStopRefresh')  # time at next scr refresh
                    mask1_run.setAutoDraw(False)
            
            # *mask2_prac_2* updates
            if mask2_prac_2.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                # keep track of start time/frame for later
                mask2_prac_2.frameNStart = frameN  # exact frame index
                mask2_prac_2.tStart = t  # local t and not account for scr refresh
                mask2_prac_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask2_prac_2, 'tStartRefresh')  # time at next scr refresh
                mask2_prac_2.setAutoDraw(True)
            if mask2_prac_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask2_prac_2.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask2_prac_2.tStop = t  # not accounting for scr refresh
                    mask2_prac_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask2_prac_2, 'tStopRefresh')  # time at next scr refresh
                    mask2_prac_2.setAutoDraw(False)
            
            # *mask3_run* updates
            if mask3_run.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                # keep track of start time/frame for later
                mask3_run.frameNStart = frameN  # exact frame index
                mask3_run.tStart = t  # local t and not account for scr refresh
                mask3_run.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask3_run, 'tStartRefresh')  # time at next scr refresh
                mask3_run.setAutoDraw(True)
            if mask3_run.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask3_run.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask3_run.tStop = t  # not accounting for scr refresh
                    mask3_run.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask3_run, 'tStopRefresh')  # time at next scr refresh
                    mask3_run.setAutoDraw(False)
            
            # *mask4_run* updates
            if mask4_run.status == NOT_STARTED and tThisFlip >= 3.3-frameTolerance:
                # keep track of start time/frame for later
                mask4_run.frameNStart = frameN  # exact frame index
                mask4_run.tStart = t  # local t and not account for scr refresh
                mask4_run.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mask4_run, 'tStartRefresh')  # time at next scr refresh
                mask4_run.setAutoDraw(True)
            if mask4_run.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > mask4_run.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    mask4_run.tStop = t  # not accounting for scr refresh
                    mask4_run.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(mask4_run, 'tStopRefresh')  # time at next scr refresh
                    mask4_run.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('stim1.started', stim1.tStartRefresh)
        trials.addData('stim1.stopped', stim1.tStopRefresh)
        trials.addData('stim2.started', stim2.tStartRefresh)
        trials.addData('stim2.stopped', stim2.tStopRefresh)
        trials.addData('stim3.started', stim3.tStartRefresh)
        trials.addData('stim3.stopped', stim3.tStopRefresh)
        trials.addData('stim4.started', stim4.tStartRefresh)
        trials.addData('stim4.stopped', stim4.tStopRefresh)
        trials.addData('fixDelay.started', fixDelay.tStartRefresh)
        trials.addData('fixDelay.stopped', fixDelay.tStopRefresh)
        trials.addData('probe.started', probe.tStartRefresh)
        trials.addData('probe.stopped', probe.tStopRefresh)
        trials.addData('fixProbe.started', fixProbe.tStartRefresh)
        trials.addData('fixProbe.stopped', fixProbe.tStopRefresh)
        # check responses
        if keyResp.keys in ['', [], None]:  # No response was made
            keyResp.keys = None
            # was no response the correct answer?!
            if str(correctResp).lower() == 'none':
               keyResp.corr = 1;  # correct non-response
            else:
               keyResp.corr = 0;  # failed to respond (incorrectly)
        # store data for trials (TrialHandler)
        trials.addData('keyResp.keys',keyResp.keys)
        trials.addData('keyResp.corr', keyResp.corr)
        if keyResp.keys != None:  # we had a response
            trials.addData('keyResp.rt', keyResp.rt)
        trials.addData('keyResp.started', keyResp.tStartRefresh)
        trials.addData('keyResp.stopped', keyResp.tStopRefresh)
        trials.addData('mask1_run.started', mask1_run.tStartRefresh)
        trials.addData('mask1_run.stopped', mask1_run.tStopRefresh)
        trials.addData('mask2_prac_2.started', mask2_prac_2.tStartRefresh)
        trials.addData('mask2_prac_2.stopped', mask2_prac_2.tStopRefresh)
        trials.addData('mask3_run.started', mask3_run.tStartRefresh)
        trials.addData('mask3_run.stopped', mask3_run.tStopRefresh)
        trials.addData('mask4_run.started', mask4_run.tStartRefresh)
        trials.addData('mask4_run.stopped', mask4_run.tStopRefresh)
        
        # ------Prepare to start Routine "trialEndBlank"-------
        continueRoutine = True
        routineTimer.add(10.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        trialEndBlankComponents = [fixStartTrial]
        for thisComponent in trialEndBlankComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialEndBlankClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trialEndBlank"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = trialEndBlankClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialEndBlankClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixStartTrial* updates
            if fixStartTrial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixStartTrial.frameNStart = frameN  # exact frame index
                fixStartTrial.tStart = t  # local t and not account for scr refresh
                fixStartTrial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixStartTrial, 'tStartRefresh')  # time at next scr refresh
                fixStartTrial.setAutoDraw(True)
            if fixStartTrial.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixStartTrial.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    fixStartTrial.tStop = t  # not accounting for scr refresh
                    fixStartTrial.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixStartTrial, 'tStopRefresh')  # time at next scr refresh
                    fixStartTrial.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialEndBlankComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trialEndBlank"-------
        for thisComponent in trialEndBlankComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('fixStartTrial.started', fixStartTrial.tStartRefresh)
        trials.addData('fixStartTrial.stopped', fixStartTrial.tStopRefresh)
        if keyResp.corr:
            number_correct = number_correct + 1
            ntotal=ntotal+1
        else:
            ntotal=ntotal+1
        
        
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
    
    # ------Prepare to start Routine "blankEnd"-------
    continueRoutine = True
    routineTimer.add(0.800000)
    # update component parameters for each repeat
    percent_correct = str(round(number_correct/ntotal*100,2))
    # keep track of which components have finished
    blankEndComponents = [fixEnd]
    for thisComponent in blankEndComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    blankEndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "blankEnd"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = blankEndClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=blankEndClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixEnd* updates
        if fixEnd.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixEnd.frameNStart = frameN  # exact frame index
            fixEnd.tStart = t  # local t and not account for scr refresh
            fixEnd.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixEnd, 'tStartRefresh')  # time at next scr refresh
            fixEnd.setAutoDraw(True)
        if fixEnd.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixEnd.tStartRefresh + 0.8-frameTolerance:
                # keep track of stop time/frame for later
                fixEnd.tStop = t  # not accounting for scr refresh
                fixEnd.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixEnd, 'tStopRefresh')  # time at next scr refresh
                fixEnd.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blankEndComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "blankEnd"-------
    for thisComponent in blankEndComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    runReal.addData('fixEnd.started', fixEnd.tStartRefresh)
    runReal.addData('fixEnd.stopped', fixEnd.tStopRefresh)
    
    # ------Prepare to start Routine "feedback_Run"-------
    continueRoutine = True
    # update component parameters for each repeat
    space_Run.keys = []
    space_Run.rt = []
    _space_Run_allKeys = []
    feedbackTxtRun.setText('Du hattest '+percent_correct+'% richtig.')
    # keep track of which components have finished
    feedback_RunComponents = [space_Run, feedbackTxtRun]
    for thisComponent in feedback_RunComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    feedback_RunClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "feedback_Run"-------
    while continueRoutine:
        # get current time
        t = feedback_RunClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=feedback_RunClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *space_Run* updates
        waitOnFlip = False
        if space_Run.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            space_Run.frameNStart = frameN  # exact frame index
            space_Run.tStart = t  # local t and not account for scr refresh
            space_Run.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(space_Run, 'tStartRefresh')  # time at next scr refresh
            space_Run.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(space_Run.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(space_Run.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if space_Run.status == STARTED and not waitOnFlip:
            theseKeys = space_Run.getKeys(keyList=['b', 'y'], waitRelease=False)
            _space_Run_allKeys.extend(theseKeys)
            if len(_space_Run_allKeys):
                space_Run.keys = _space_Run_allKeys[-1].name  # just the last key pressed
                space_Run.rt = _space_Run_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *feedbackTxtRun* updates
        if feedbackTxtRun.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedbackTxtRun.frameNStart = frameN  # exact frame index
            feedbackTxtRun.tStart = t  # local t and not account for scr refresh
            feedbackTxtRun.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedbackTxtRun, 'tStartRefresh')  # time at next scr refresh
            feedbackTxtRun.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in feedback_RunComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "feedback_Run"-------
    for thisComponent in feedback_RunComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if space_Run.keys in ['', [], None]:  # No response was made
        space_Run.keys = None
    runReal.addData('space_Run.keys',space_Run.keys)
    if space_Run.keys != None:  # we had a response
        runReal.addData('space_Run.rt', space_Run.rt)
    runReal.addData('space_Run.started', space_Run.tStartRefresh)
    runReal.addData('space_Run.stopped', space_Run.tStopRefresh)
    runReal.addData('feedbackTxtRun.started', feedbackTxtRun.tStartRefresh)
    runReal.addData('feedbackTxtRun.stopped', feedbackTxtRun.tStopRefresh)
    # the Routine "feedback_Run" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed expInfo['realRuns'] repeats of 'runReal'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
