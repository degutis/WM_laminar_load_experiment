% Randomization of stimuli 

% four load conditions 
% 4 types of images
% 4 locations 
% [1 0] for probe (present or absent)

numCategories =4; 
loadConditions = [1 4]; 
numTrials = 16; %number of trials per block. Optimally this number is divisable by 4
numTrialsCond = numTrials/length(loadConditions);

% Type of trials to include: I'd argue a given trial only need to have
% images from one category-type (FF, FM, SI, SO). This not only makes the 
% more difficult, but also provides the possibility of running an MVPA
% analysis on the initial non-retrocue (everything attended, if
% you will) condition. 
% So if we have 32 trials per block this results in 8 trials per
% category-type (16 per category). In the behavioral, if we manipulate load, 
% then we get 2 conditions per category-type per load per block. 
% Since we have a limited number of images, we can repeat faces and scenes
% on each new block (we can discuss whether this is a problem, but it's
% done in other face/scene WM experiments)
% Thus, this results in a total of 24 novel images per category-type
% ((1(load condition)+2(l.c.)+3+4)*2= 20+4 novel images for the probe (when
% the answer should be that this given category-type wasn't part of the
% memory set). As a quick side, I would say when probing we should only
% probe images from the same category-type. Otherwise there might not even
% be a true "selection" from WM (or comparison of the new image to the WM set,
% just an automatic response to the perception of a new category-type. 

images_fm = dir(fullfile(pwd,'Retrocue','images','*fm.jpg'));
images_ff = dir(fullfile(pwd,'Retrocue','images','*ff.jpg'));
images_si = dir(fullfile(pwd,'Retrocue','images','*si.jpg'));
images_so = dir(fullfile(pwd,'Retrocue','images','*so.jpg'));

nOrigImages = 14; 

fm_IDs = randperm(length(images_fm),nOrigImages);
ff_IDs = randperm(length(images_ff),nOrigImages);
si_IDs = randperm(length(images_si),nOrigImages);
so_IDs = randperm(length(images_so),nOrigImages);

fm_IDs = {images_fm(fm_IDs).name};
fm_sc = Shuffle(strcat('scrambles/',fm_IDs));
fm_IDs = strcat('images/',fm_IDs);

ff_IDs = {images_ff(ff_IDs).name};
ff_sc = Shuffle(strcat('scrambles/',ff_IDs));
ff_IDs = strcat('images/',ff_IDs);

si_IDs = {images_si(si_IDs).name};
si_sc = Shuffle(strcat('scrambles/',si_IDs));
si_IDs = strcat('images/',si_IDs);

so_IDs = {images_so(so_IDs).name};
so_sc = Shuffle(strcat('scrambles/',so_IDs));
so_IDs = strcat('images/',so_IDs);

image_IDs = [fm_IDs;ff_IDs;si_IDs;so_IDs];
scramble_IDs = [fm_sc;ff_sc;si_sc;so_sc];

locations_L1 = {1,2,3,4};
% locations_L2 = {[1,3],[2,4]};
% locations_L3 = {[1,2,3],[2,3,4],[1,3,4],[1,2,4]};
locations_L4 = {[1,2,3,4]};

locations_L1 = Shuffle(repmat(locations_L1,1,numTrialsCond/length(locations_L1)));
% locations_L2 = Shuffle(repmat(locations_L2,1,numTrialsCond/length(locations_L2)));
% locations_L3 = Shuffle(repmat(locations_L3,1,numTrialsCond/length(locations_L3)));
locations_L4 = Shuffle(repmat(locations_L4,1,numTrialsCond/length(locations_L4))); 

locations = [locations_L1;locations_L4];

% WHAT IS THE KEYPRESS ON THE SCANNER!!! NEED TO KNOW
keyPress = [repmat({'right'}, 1, numTrials/4), repmat({'left'}, 1, numTrials/4)];
arrow = [repmat({'>'}, 1, numTrials/4), repmat({'<'}, 1, numTrials/4)]; 

randpermCorrect = randperm(length(keyPress)); 
randpermFoil = randperm(length(keyPress)); 

keyPressCorrect = keyPress(randpermCorrect);
keyPressFoil = repmat({'None'}, 1, numTrials/2);

arrowCorrect = arrow(randpermCorrect);
arrowFoil = arrow(randpermFoil); 


trials = cell(numTrials,max(loadConditions)+10); % x amount of columns for the number of load conditions
% plus 5 extra columns to define certain parameters
% columns: stim1-stim4, probeStim, probe(0/1), Load, category, correctResp
countKey = 1;
for c = 1:numCategories
    countIm = 1;
    countSc = 1;
    for l = 1:length(loadConditions)
        for stim=1:max(loadConditions)
            if sum(ismember(locations{l,(c-1)*2+1},stim))
                trials((c-1)*length(loadConditions)*2+(l-1)*2+1,stim) = image_IDs(c,countIm);
                countIm=countIm+1;                
            else %add scramble image 
                trials((c-1)*length(loadConditions)*2+(l-1)*2+1,stim) = scramble_IDs(c,countSc);
                countSc=countSc+1;
            end
            
            if sum(ismember(locations{l,(c-1)*2+2},stim))
                trials((c-1)*length(loadConditions)*2+(l-1)*2+2,stim) = image_IDs(c,countIm);
                countIm=countIm+1;
            else %add scramble image 
                trials((c-1)*length(loadConditions)*2+(l-1)*2+2,stim) = scramble_IDs(c,countSc);
                countSc=countSc+1;
            end          
        end        
        % Probe (image and indication 1/0)
        probeImag = trials((c-1)*length(loadConditions)*2+(l-1)*2+1,:);
        probeImag = probeImag(~cellfun('isempty',probeImag));
        probeImag = Shuffle(probeImag(contains(probeImag,'images')));
        probeImag = probeImag(1);
        
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+1) = probeImag;
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+2) = {1}; %probe = part of set      
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+1) = image_IDs(c,countIm);
        countIm = countIm+1;
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+2) = {0}; %probe = not part of set
        
        % Load condition
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+3) = {loadConditions(l)}; 
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+3) = {loadConditions(l)};
        
        % Category-type name
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+4) = {image_IDs{c,1}(end-5:end-4)}; 
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+4) = {image_IDs{c,1}(end-5:end-4)};
        
        % CorrectAnswer %!!!!!!!
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+5) = {'b'}; 
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+5) = {'y'};
        
%         trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+6) = arrowCorrect(countKey); 
%         trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+6) = arrowFoil(countKey);
%         countKey = countKey+1;
        
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+6) = scramble_IDs(randi(length(scramble_IDs), 1));  
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+6) = scramble_IDs(randi(length(scramble_IDs), 1));
        
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+7) = scramble_IDs(randi(length(scramble_IDs), 1)); 
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+7) = scramble_IDs(randi(length(scramble_IDs), 1));
        
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+8) = scramble_IDs(randi(length(scramble_IDs), 1)); 
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+8) = scramble_IDs(randi(length(scramble_IDs), 1));
        
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+9) = scramble_IDs(randi(length(scramble_IDs), 1));
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+9) = scramble_IDs(randi(length(scramble_IDs), 1));
        
        %Location of images
        trials((c-1)*length(loadConditions)*2+(l-1)*2+1,max(loadConditions)+10) = {num2str(locations{l,(c-1)*2+1})}; 
        trials((c-1)*length(loadConditions)*2+(l-1)*2+2,max(loadConditions)+10) = {num2str(locations{l,(c-1)*2+2})};      
    end
end

trials=trials(randperm(numTrials),:);
% very "dumb" way of pseudorandomizing the trials
% we might need to think of a better way - in relation to signal strength
% maybe? (Mumford et al) 


trialTable = cell2table(trials(:,1:end-1));
trialTable.Properties.VariableNames = {'stimulus1','stimulus2','stimulus3','stimulus4','probeIm','probeCon','load','category','correctResp','mask1','mask2','mask3','mask4'};


% number of times each location on screen in probed not controled for

writetable(trialTable,'trials_6.csv')

trialTable_mat = cell2table(trials);
trialTable_mat.Properties.VariableNames = {'stimulus1','stimulus2','stimulus3','stimulus4','probeIm','probeCon','load','category','correctResp','mask1','mask2','mask3','mask4','imageLoc'};
save('trials_6.mat','trialTable_mat')
