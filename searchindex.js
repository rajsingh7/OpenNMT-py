Search.setIndex({docnames:["CONTRIBUTING","FAQ","Library","Summarization","examples","extended","im2text","index","main","modules","onmt","onmt.io","onmt.modules","onmt.translation","options/preprocess","options/train","options/translate","quickstart","ref","references","speech2text"],envversion:53,filenames:["CONTRIBUTING.md","FAQ.md","Library.md","Summarization.md","examples.rst","extended.md","im2text.md","index.rst","main.md","modules.rst","onmt.rst","onmt.io.rst","onmt.modules.rst","onmt.translation.rst","options/preprocess.md","options/train.md","options/translate.md","quickstart.md","ref.rst","references.md","speech2text.md"],objects:{"onmt.Loss":{LossComputeBase:[10,0,1,""]},"onmt.Loss.LossComputeBase":{monolithic_compute_loss:[10,1,1,""],sharded_compute_loss:[10,1,1,""]},"onmt.Models":{DecoderState:[10,0,1,""],NMTModel:[10,0,1,""]},"onmt.Models.NMTModel":{forward:[10,1,1,""]},"onmt.Optim":{Optim:[10,0,1,""]},"onmt.Optim.Optim":{step:[10,1,1,""],update_learning_rate:[10,1,1,""]},"onmt.Statistics":{output:[10,1,1,""]},"onmt.Trainer":{drop_checkpoint:[10,1,1,""],train:[10,1,1,""],validate:[10,1,1,""]},"onmt.io":{AudioDataset:[11,0,1,""],ImageDataset:[11,0,1,""],TextDataset:[11,0,1,""]},"onmt.io.AudioDataset":{get_fields:[11,2,1,""],get_num_features:[11,2,1,""],make_audio_examples_nfeats_tpl:[11,2,1,""],read_audio_file:[11,2,1,""]},"onmt.io.ImageDataset":{get_fields:[11,2,1,""],get_num_features:[11,2,1,""],make_image_examples_nfeats_tpl:[11,2,1,""],read_img_file:[11,2,1,""],sort_key:[11,1,1,""]},"onmt.io.TextDataset":{get_fields:[11,2,1,""],get_num_features:[11,2,1,""],make_text_examples_nfeats_tpl:[11,2,1,""],read_text_file:[11,2,1,""],sort_key:[11,1,1,""]},"onmt.modules":{AudioEncoder:[12,0,1,""],CNNDecoder:[12,0,1,""],CNNEncoder:[12,0,1,""],ConvMultiStepAttention:[12,0,1,""],CopyGenerator:[12,0,1,""],Embeddings:[12,0,1,""],EncoderBase:[12,0,1,""],GlobalAttention:[12,0,1,""],ImageEncoder:[12,0,1,""],InputFeedRNNDecoder:[12,0,1,""],MatrixTree:[12,0,1,""],MeanEncoder:[12,0,1,""],MultiHeadedAttention:[12,0,1,""],PositionalEncoding:[12,0,1,""],PositionwiseFeedForward:[12,0,1,""],RNNDecoderBase:[12,0,1,""],RNNEncoder:[12,0,1,""],SRU:[12,3,1,""],StdRNNDecoder:[12,0,1,""],TransformerDecoder:[12,0,1,""],TransformerEncoder:[12,0,1,""],WeightNorm:[12,3,1,""]},"onmt.modules.AudioEncoder":{forward:[12,1,1,""]},"onmt.modules.CNNDecoder":{forward:[12,1,1,""]},"onmt.modules.CNNEncoder":{forward:[12,1,1,""]},"onmt.modules.ConvMultiStepAttention":{forward:[12,1,1,""]},"onmt.modules.CopyGenerator":{forward:[12,1,1,""]},"onmt.modules.Embeddings":{forward:[12,1,1,""],load_pretrained_vectors:[12,1,1,""]},"onmt.modules.EncoderBase":{forward:[12,1,1,""]},"onmt.modules.GlobalAttention":{forward:[12,1,1,""],score:[12,1,1,""]},"onmt.modules.ImageEncoder":{forward:[12,1,1,""]},"onmt.modules.MeanEncoder":{forward:[12,1,1,""]},"onmt.modules.MultiHeadedAttention":{forward:[12,1,1,""]},"onmt.modules.RNNDecoderBase":{forward:[12,1,1,""]},"onmt.modules.RNNEncoder":{forward:[12,1,1,""]},"onmt.modules.TransformerDecoder":{forward:[12,1,1,""]},"onmt.modules.TransformerEncoder":{forward:[12,1,1,""]},"onmt.translate":{Beam:[13,0,1,""],GNMTGlobalScorer:[13,0,1,""],Translation:[13,0,1,""],TranslationBuilder:[13,0,1,""],Translator:[13,0,1,""]},"onmt.translate.Beam":{advance:[13,1,1,""],get_current_origin:[13,1,1,""],get_current_state:[13,1,1,""],get_hyp:[13,1,1,""]},"onmt.translate.GNMTGlobalScorer":{score:[13,1,1,""],update_global_state:[13,1,1,""]},"onmt.translate.Translation":{attns:[13,3,1,""],gold_score:[13,3,1,""],gold_sent:[13,3,1,""],log:[13,1,1,""],pred_scores:[13,3,1,""],pred_sents:[13,3,1,""],src:[13,3,1,""],src_raw:[13,3,1,""]},"onmt.translate.Translator":{translate_batch:[13,1,1,""]},onmt:{Statistics:[10,0,1,""],Trainer:[10,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","staticmethod","Python static method"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:staticmethod","3":"py:attribute"},terms:{"0473v3":18,"04_e16":3,"100d":1,"100k":6,"10_ppl_12":3,"29_ppl_14":3,"62_e16":3,"break":2,"case":[3,10],"class":[0,2,7,10,11,12],"default":[3,4,15,17,20],"final":[2,10,12,13],"float":[10,11,12,13],"function":[0,2,10,11,12],"import":2,"int":[10,11,12,13],"long":10,"new":[0,3,4,17],"null":[4,17],"return":[0,2,10,11,12,13],"short":20,"static":11,"true":[2,11,12,13,16],"try":[4,17],"void":[4,17],"while":11,And:[4,5,8,12],But:10,For:[2,3,4,11,12,17],The:[1,2,3,4,5,6,8,12,15,17,20],Then:12,These:12,Use:15,Uses:13,Using:[1,19],_compute_loss:10,_e13:[4,5],abil:12,abov:[2,3,6],abs:18,acc:2,accept:[4,17],access:3,account:3,accumul:[10,15],accuraci:10,achiev:3,achin:18,acknowledg:7,acl:[3,8,18,19],act:3,action:[12,15],adadelta:[10,15],adagrad:[10,15],adagrad_accum:10,adam:[1,3,10,15],adamoptim:15,adapt:20,add:[0,4,12,13,17],add_:2,added:2,adding:0,addit:[3,7,12,13,15],addition:[3,12],address:13,adopt:15,advanc:[4,13,17],advantag:[2,3],aerob:[4,17],after:[3,15],alexand:8,alia:12,align:[3,11,12,18],all:[11,12,15,20],allow:15,almost:15,alpha:[13,16],also:[0,2,3,4,10,12,15,17],altern:[3,7,8],alwai:2,amount:3,an4_dataset:20,ani:0,annurev:18,anoth:2,antich:[4,17],api:15,apo:[2,4,17],appli:[12,15,20],approach:[3,6,12,19,20],approxim:10,apt:20,arbitrari:12,architectur:7,area:2,arg:2,argument:0,around:[3,12,13],arriv:2,articl:3,arxiv:[18,19],ask:2,asphalt:2,assert:0,assum:[2,3,6,20],atok:[4,5],atten:13,attent:[2,3,7,10,13,16,19,20],attet:12,attn:[10,12,13,15,16],attn_out:13,attn_typ:12,audio:[10,11,12,14,15,16,20],audio_dir:11,audiodataset:11,audioencod:12,australia:3,australian:3,author:8,automat:2,avail:[10,15],back:[2,10,13],backpoint:13,backpropag:10,bahdanau:[3,12,15,18],band:2,bar:2,barri:18,base:[0,2,3,6,10,12,13,18,19,20],base_target_emb:12,baselin:[3,15],bash:4,batch:[2,10,12,13,15,16],batch_siz:[1,2,3,6,20],bcb14:[12,18],beam:[3,4,7,10,17],beam_siz:[2,3,13],beam_trac:13,beat:[4,17],becom:[2,3],been:[2,4,12,17,19],befor:0,begin:[2,10,13],behavior:2,believ:2,below:[4,5],bengio:[3,18,19],bernoulli:12,best:[13,16],beta1:[10,15],beta2:[10,15],beta:[13,16],between:[2,3,15,18,19],beyond:10,bidir:15,bidirect:[2,3,12],bidirectional_encod:[2,12],billion:3,binari:12,birch:19,bleu:[4,5],boe:2,booktitl:8,bool:[10,11,12,13],bos:13,boss:2,both:[2,3,4,11,17],bptt:[10,15],bridg:[18,19],brnn:[3,15],broadcast:2,buffer:10,build:[2,11,13],builder:2,built:[6,12,20],bunch:1,bureaucraci:[4,17],calcul:[10,12],call:2,came:[4,17],can:[3,4,6,8,10,11,17],cao:18,caption:6,care:13,cdot:6,chang:[0,15],channel:8,charact:[6,20],check:[0,2],checklist:0,checkpoint:[10,15],chen:[18,19],cho:[3,18,19],choic:3,christoph:18,citat:7,cite:8,citi:2,clear:0,clerk:2,clone:8,cloth:[4,17],cnn:[3,12,15,20],cnn_kernel_width:12,cnndecod:12,cnnencod:12,code:0,collabor:[4,17],com:[4,8,20],combin:12,command:[3,4,6,17],comment:0,commod:3,commun:0,compani:2,competitor:2,compi:12,compil:6,complet:[6,13],compon:2,comput:[2,10,12,13],computs:12,concat:[12,15],concaten:15,conda:6,conduct:2,consid:12,consider:15,consist:[4,6,12,17],construct:[12,13],constructor:0,contain:[4,6,11,12,13,17,20],content:[4,17],context:[12,15],context_g:12,context_length:12,contextg:12,continu:0,contribut:[0,12],contributor:7,control:10,conv2conv:7,conv:[12,15],converg:[3,4,17],convers:[6,20],convex:12,convmultistepattent:12,convolut:[12,20],copi:[3,7,13,15,16],copy_attn:[3,12,13],copygener:12,core:[2,7,10],corpu:[3,11],corpus_fil:11,corr:[12,18],correspond:[11,16],could:2,council:2,court:2,cover:2,coverag:[12,13,15,16],coverage_attn:12,crayon:15,creat:[2,11,14,16],csv:1,cuda:[13,15],cudnn:12,cur_trunc:10,current:[1,2,3,10,12,13],custom:[10,11,15],dailymail:3,dalt:2,data:[1,2,4,5,6,7,10,13,15,20],data_typ:[6,10,11,20],dataset:[2,3,4,6,7,13,17],dblp:12,dcs:[4,5],ddress:18,debug:[13,16],dec:[1,15],dec_stat:10,decai:[3,10,15],decay_method:[1,10],decid:3,decod:[1,2,3,4,7,10,16,17,20],decoder_embed:2,decoder_typ:1,decoderst:[10,12],decompil:6,decreas:15,deep:[6,20],deepspeech:20,def:2,deficit:3,delta:6,demo:[4,6,17,20],deng:8,depend:[7,10,12],deprec:[2,15],describ:[3,8,15],detail:[6,8],dev:20,develop:0,devic:[2,15,16],dict:[1,2,10,11,13,14,15,16],dict_fil:1,dictionari:[3,10,11,12,13,14,15,16],did:2,differ:[1,3,12],dim1:1,dim:12,dim_d:1,dimens:[3,12],dimension:[3,12],dip:2,dir:[14,16],direct:3,directli:12,directori:[6,8,14,16,20],discourag:15,disk:2,dist:[2,10,13],distribtut:12,distribut:[10,12,15],divid:11,divis:12,dizzi:2,doc:[7,9,15],docker:8,dockerfil:8,document:[0,3,6,8,20],doe:[1,10,15,16],doi:[8,18],dollar:3,done:[4,5,10],dot:[3,12],dotprod:15,down:[4,17],download:[4,5,6,17,20],drastic:3,dream:2,driven:6,drop_checkpoint:10,dropout:[1,12,15],due:[3,15],dump:16,durabl:2,dure:[3,13],dynam:[11,12,14,16],dynamic_dict:[3,11],dzmitri:18,each:[3,11,12,13,15,16],edu:[1,6,20],effect:[1,3,12,19],effici:[7,10],either:3,elaps:[2,10],element:2,els:12,emb:12,emb_fil:[1,12],emb_siz:2,embed:[2,3,7,12],embedding_s:12,embeddings_to_torch:1,emnlp:[3,18],emploi:10,enc:[1,15],encod:[1,2,3,4,7,10,17,20],encoder_embed:2,encoder_out_combin:12,encoder_out_t:12,encoder_out_top:12,encoder_typ:[1,15],encoderbas:[10,12],end:13,ensur:[2,3],entireti:2,eos:13,epoch:[1,2,3,10,15,20],epoch_step:2,epochn:15,eps:12,equal:15,equip:2,error:0,escap:[4,5],eural:18,evalu:[4,5,7,17],even:2,everi:[3,13,14,15],exact:10,exampl:[0,1,4,7,10,11,17],example_dict:11,exce:[3,15],except:15,exist:[14,16],exp:15,experi:[3,15],experiment:15,expon:15,extend:[3,12],extent:[4,17],extra:12,extra_word:12,extract:11,fail:3,fall:2,fals:[2,10,12,13],familiar:8,faq:7,faster:[3,12,15],feat:15,feat_dim_expon:12,feat_merg:12,feat_padding_idx:12,feat_vec_expon:12,feat_vec_s:12,feat_vocab_s:12,feats_padding_idx:12,featur:[7,10,11,12,14,18,19,20],feder:[4,17],feed:[2,12,15],ffectiv:18,ffn:12,field:[2,10,11,13],figur:3,file:[1,2,4,6,11,14,15,16,17,20],filenam:[1,15],files2roug:3,filter:11,filter_pr:11,find:8,fine:2,first:[0,2,12,20],fit:[4,17],fix:[0,12,15],flake8:0,floattensor:[10,12,13],fmt:20,fnn:12,folder:[4,17],follow:[3,8],forc:15,form:[3,10,11],format:15,formula:6,fortunato:3,forward:[10,12],found:3,four:6,fourier:20,frac:6,framework:[7,9,15],frequenc:14,from:[1,2,3,4,6,10,11,12,13,15,17,20],from_batch:2,fulfil:2,full:13,fulli:12,gao:18,gap:[18,19],garza:2,gate:15,gehringagyd17:12,gener:[1,2,3,7,10,11,12,14,16,20],get:[1,2,3,6,11,13,20],get_current_origin:13,get_current_st:13,get_field:11,get_hyp:13,get_num_featur:11,giga:3,giga_sgd3:3,giga_sgd3_512:3,giga_sgd3_512_acc_51:3,git:[8,20],github:[4,8,20],gitter:8,give:[15,16],given:[6,13,20],global:[12,15],global_attent:3,global_scor:13,globalattent:[0,12],globalscor:13,glove:7,glove_dir:1,gnmtglobalscor:13,goal:6,goe:2,going:[4,17],gold:13,gold_scor:13,gold_sent:13,gone:15,good:15,googl:[1,13,16,18,19],got:2,gpu:[3,4,5,6,7,10,13,16,17,20],gpuid:[1,3,4,5,6,15,17,20],grad:[10,15],gradient:[2,3,10,15],gram:3,green:2,group:[4,10,17],gru:12,guillaum:8,gym:[4,17],h_s:12,h_t:12,had:16,haddow:[18,19],halv:3,ham:[14,16,20],handl:[2,10],hard:10,harvard:[6,20],harvardnlp:4,has:[2,3,4,15,17,19],has_tgt:13,have:[2,3,4,11,12,13,15,17],head:[4,12,17],head_count:12,help:[4,8,17],henc:6,here:[2,3],hidden:[4,10,12,15,17],hidden_s:[2,12],hieu:18,higher:[15,16],highest:[3,16],him:2,his:2,hit:10,host:15,how:[2,3,7,8,12],howev:[3,10,12],html:[4,5],http:[1,4,5,6,8,15,18,20],human:[18,19],hyperparamet:1,hypothesi:13,iclr:[3,18],idea:12,identifi:16,ids:[2,13],ilya:18,im2latex:6,im2text:6,im2text_smal:6,imag:[7,10,11,12,14,16],image0_path:6,image1_path:6,image2_path:6,imagedataset:11,imageencod:12,img:[6,10,11,14,15,16],img_dir:11,immedi:2,impact:[2,3],implement:[3,4,10,12,17],impli:12,improv:[10,12,18,19],includ:[0,8,12,15],incorpor:15,increas:3,index:[11,12],indic:[12,13],infer:[6,7],inform:16,init:15,initi:[1,3,7,10,12],inproceed:8,input:[2,3,10,12,14,15,16,18,19],input_feed:[10,12],input_s:12,inputfeedrnndecod:[2,12],inspir:19,instal:[6,7,20],instanc:2,instead:[3,12],instruct:15,instructor:[4,17],integr:0,interest:2,interfac:[10,12],intern:13,interv:15,introduc:[3,12],italian:[4,17],item:12,iter:[2,10,11],its:[0,2,11,12],itself:2,jail:2,jaitli:3,jean:[8,19],jointli:[3,12,18],jonah:2,jorg:2,journal:12,june:3,just:10,keep:[13,14],kei:[11,12],kera:15,kernel:15,kerra:15,key_len:12,kill:[4,17],kim:8,klau:18,klein:8,klingner:19,know:2,known:12,krikun:18,kyunghyun:18,label0_token0:[6,20],label0_token1:[6,20],label0_tokenn0:[6,20],label1_token0:[6,20],label1_token1:[6,20],label1_tokenn1:[6,20],label2_token0:[6,20],label2_token1:[6,20],label2_tokenn2:[6,20],label:[6,10,20],laid:[4,17],lambda:15,lapata:18,larg:[3,19],larger:[4,17],last:[10,13],latex:[6,20],layer:[1,2,3,4,12,15,17],learn:[2,3,6,10,12,15,18,20],learning_r:[1,6,20],learning_rate_decai:20,leav:2,legal:2,legisl:[4,17],len:[2,10,12],length:[3,10,11,12,13,14,16],let:2,lib:2,librari:[7,8],librosa:20,libsox:20,like:[1,3,6,11,20],limit:10,line:[4,6,11,16,17,20],linear:2,linguist:[12,18,19],link:6,list:[0,12,15,19],literatur:15,liu:[3,18],ll17:[12,18],load:[2,12,15],load_field:2,load_pretrained_vector:12,loader:7,local:2,locat:11,log:[2,3,7,10,13],logprob:13,logsoftmax:2,longer:[3,16],longtensor:[10,12,13],look:[3,6,8,20],lookup:16,loss:[2,7,9],losscomputebas:10,love:0,low:[4,5],lower:[4,5,14],lowercas:14,lowest:3,lpm15:[12,18],lr_decai:10,lrb:3,lsl:[13,18],lstm:[2,3,4,6,12,15,17,20],luong:[3,12,15,18,19],macherei:[18,19],machin:[3,8,12,13,18,19],made:[2,4,17],mai:[10,15],main:[4,8,12,17],make:[0,10],make_audio_examples_nfeats_tpl:11,make_image_examples_nfeats_tpl:11,make_shard_st:10,make_text_examples_nfeats_tpl:11,man:[3,18,19],manag:[10,13],mani:14,manipul:10,map:[10,12],margin:12,mark:15,markup:6,mask:12,master:[4,17],materi:2,math:6,matrix:[12,15],matrixtre:12,max:[15,16],max_grad_norm:[1,2,3,6,10,20],max_len:12,max_length:13,maxim:18,maximum:[3,10,11,13,14,15,16],mean:[2,3,4,11,12,15,17],meanencod:12,mechan:[3,12],memisev:19,memori:[10,15],mention:3,merg:[12,15],method:[2,10,12,15],mike:18,million:[4,17],mimic:1,min:14,minh:18,minim:[3,4,17],mirella:18,mirror:15,mkdir:[1,4,5],mlp:[3,12,15],mmt_task1_test2016:[4,5],model:[2,3,4,5,6,7,9,12,13,20],model_acc_x_ppl_x_e13:[6,20],model_dim:12,model_epochx_ppl:[4,17],model_s:10,model_typ:[6,20],modif:10,modifi:[0,1],modul:[2,7,10,13],mohammad:18,mondai:3,monolithic_compute_loss:10,more:[4,6,15,17],mose:[4,5],most:3,mostli:[10,13],much:15,multi30k:[4,5],multi30k_model:[4,5],multi30k_model_:[4,5],multi:[4,5,7,10,12],multigpu:10,multiheadedattent:12,multimod:[4,5],multipl:12,multipli:10,municip:2,must:[11,12],mutipl:10,mydata:1,n_batch:10,n_best:13,n_correct:10,n_src_featur:11,n_tgt_featur:11,n_word:10,name:[0,15],narrow:3,nation:[4,17],nbest:13,necessari:[10,15],need:[1,2,3,10,12,15],net:3,network:[3,12,20],neural:[3,8,12,13,18,19,20],neuro:18,next:[2,10],nfeat:[11,12],nicola:2,nip:3,nlp:1,nmt:[13,16],nmtlosscomput:2,nmtmodel:[2,10,12,13],no_sent_tag:3,noam:[1,10],non:[10,12,15],none:[10,11,12,13],norm:[3,12,15],normal:[2,15],normalize_audio:11,norouzi:[18,19],notabl:3,notag_sgd3:3,notag_try3_acc_49:3,note:[3,4,10,17],notifi:2,now:[2,4,17],num_feat:11,num_lay:[2,12],num_src_feat:11,num_tgt_feat:11,number:[2,3,10,11,12,13,15],nvidia:8,obj:12,object:[10,11,12,13],off:3,often:3,onc:3,one2:1,one:[2,4,6,10,11,12,16,17,20],onli:3,onmt:[2,10,11,12,13],open:8,opennmt:[0,1,3,6,8,10,19,20],oper:12,opinion:2,opt:10,optic:6,optim:[1,2,7,9],option:[1,3,7,10,12],ord:18,orderediter:2,org:[4,5,8,15,18],origin:15,oriol:18,other:[2,3,10,15,18],otherwis:15,our:[1,2,8,20],out:[3,10,11],output:[1,2,3,4,5,6,10,12,13,14,15,16,17,20],output_fil:1,over:[10,12,13,15],overview:7,own:10,p17:8,packag:2,pad:[2,10,12,13],pad_word:2,pair:[3,10],paper:[0,6,12,15,19],parallel:[3,4,12,15,17],param:[10,15],param_init:1,paramet:[2,3,10,11,12,13,15,16],parameter:12,pardon:2,parliament:[4,17],pars:12,part:[2,3],pass:10,past:15,path:[6,11,12,14,15,16,20],peek:11,penalti:16,per:[3,4,6,16,17,20],perf:10,perform:3,perl:[4,5],perplex:[3,10,15],person:[4,17],pham:[3,18,19],phrase:16,pilat:[4,17],pillow:6,pilot:2,pip:[6,8,20],place:2,pleas:[0,8],plu:12,point:3,pointer:[3,13],pointwis:2,pool:12,portal:8,posit:[10,12,15],position_encod:[1,12],positionalencod:12,positionwisefeedforward:12,possibl:10,postur:[4,17],ppl:[2,10,15],pproach:18,pre:[1,10,15],pre_word_vecs_dec:1,pre_word_vecs_enc:1,pred:[2,4,5,6,16,17,20],pred_scor:13,pred_sent:13,predic:11,predict:[4,10,16,17],prefix:[14,15],prepar:[1,4,5,14],preprint:[18,19],preprocess:[1,2,4,5,6,7,11,15,20],prerog:[4,17],present:2,pretrain:[7,12,15],previous:3,price:3,print:[2,15,16],prob:13,probabl:[12,13,15],probil:12,problem:[6,13],proc:[8,18],procedur:3,process:[10,13],produc:[13,20],project:[0,8,12],propag:10,provid:[2,6,8,16,20],provis:[4,17],prune:7,pull_request_chk:0,purpos:[4,17],pyroug:3,python3:2,python:[1,2,3,4,5,6,15,17,20],pytorch:[0,1,8,20],qin:18,quarter:3,queri:12,query_len:12,quest:[4,5],quick:7,quickstart:[4,7,8],quit:[4,17],quoc:18,quot:[2,4,17],random:[7,15],rang:[2,10],rank:13,ranslat:18,rare:[13,19],rate:[2,3,7,10,11,14,16,20],raw:[12,13,20],read_audio_fil:11,read_img_fil:11,read_text_fil:11,readi:8,readm:15,recent:15,recognit:6,recommend:15,record:[2,3],recurr:[10,12],reduc:3,refer:[0,7],refus:[4,17],rel:[6,15,20],releas:3,relev:12,reliev:10,renorm:[3,15],repeat:[2,3],replac:[3,13,16],replace_unk:[3,4,5,13,17],replic:[3,12],report:[2,8,14,15],report_func:[2,10],repositori:8,repres:10,represent:[12,18,20],reproduc:15,requir:[4,8,10,12,17],rescor:13,research:[2,8],residu:12,resourc:7,respons:10,result:15,resum:10,rico:18,rip:[4,17],rnn:[2,10,12,15],rnn_size:[1,2,3,12],rnn_type:[2,12],rnndecoderbas:[10,12],rnnencod:[2,12],roblem:18,roll:2,ronda:2,root:8,rose:2,roug:3,rrb:3,run:[0,1,2,3,4,10,15,16,17],rush:8,safeti:3,sai:[4,17],said:2,same:[0,2,3,11,12],sampl:[6,11,14,15,16,20],sample_r:[11,12,20],san:2,sand:2,save:[1,2,4,10,14,15,17],save_data:[1,3,4,5,6,17,20],save_model:[1,3,4,5,6,17,20],schedul:10,schuster:[18,19],score:[2,3,12,13,16],script:[0,1,4,5],sea:[6,20],search:[3,4,7,10,17],second:[11,12,14,15,16,20],section:3,sed:[4,5],see:[0,3,6,12,15],seed:[3,14,15],seemingli:15,select:[12,15],self:2,send:[0,15],senellart:8,senior:[4,17],sennrich:[18,19],sensit:1,sent:[2,3,4,16],sent_numb:13,sentenc:[3,4,5,11,12,13,14,16,17],separ:[4,12,17],seper:12,seq:14,sequenc:[10,11,12,14,15,16],sequenti:2,serial:[1,12],server:15,set:[1,2,3,12,15,16],set_paramet:2,setup:[1,10,12],sever:12,sgd3_out:3,sgd:[2,3,10,15],sh16:[12,18],shall:[6,20],shard:10,shard_siz:10,sharded_compute_loss:10,share:[2,3,14,15,16],share_embed:3,share_vocab:3,sharpli:3,shef:[4,5],ship:2,should:[2,3,4,12,17],show:3,shrunk:3,shuffl:14,side:[3,11,15],similar:[3,12],simpl:[4,10,12,17],simplest:10,simpli:12,simulatan:12,sin:15,sinc:3,sinusoid:12,size:[0,2,3,10,11,12,13,14,15,16,20],sleep:[4,17],slight:3,slightli:[1,3],small:[2,4,17],smooth:2,soar:3,softmax:12,soldier:[4,17],some:[2,4,17],sort:11,sort_kei:11,sourc:[3,4,6,8,10,11,12,14,15,16,17,20],sox:20,space:[4,17],spars:12,spec:12,special:2,specif:[12,15],specifi:[2,12,15],spectrogram:[11,14,15,16,20],speech0_path:20,speech1_path:20,speech2_path:20,speech:7,split:3,src:[1,2,3,4,5,6,10,11,12,13,14,15,16,17,20],src_dir:[6,11,20],src_examples_it:11,src_len:[10,12],src_map:[11,12],src_pad:2,src_raw:13,src_seq_length:[3,11],src_seq_length_trunc:3,src_vocab:2,sru:7,stack:[12,15],standard:12,stanford:1,start:[7,10,15],start_checkpoint_at:3,start_decay_at:10,stat:[2,10,15],state:[10,12,15],statist:10,statmt:[4,5],statu:14,std:11,stdout:[10,13],stdrnndecod:12,step:[4,5,7,10,13,15],stft:20,stoi:2,stone:2,store:[6,20],str:[10,11,12,13],strategi:10,stretch:[4,17],stride:[11,14,16,20],string:[10,11,12],strip:3,structur:[2,7,18],style:[0,12,15],subclass:10,subtract:11,subword:19,sudo:20,suggest:15,sum:[12,13,15],summar:[4,7,17],summari:4,superclass:0,support:[7,10,12,15],sutskev:18,system:[1,6,13,15,18,19,20],tabl:16,tag:3,take:[0,4,6,8,10,12,13,15,17],taken:12,tar:[4,5,6,20],target:[3,4,10,11,12,13,14,16,17,19],task:[4,5],technic:[6,8],tensor:[0,2,10,12],tensorflow:15,tensors2:1,term:[4,12,13,17],terribl:[4,17],test:[0,2,3,4,5,6,12,17],text:[4,7,10,11,12,14,15,16,18],textdataset:11,tgt:[1,2,3,4,5,6,10,11,12,14,15,16,17,20],tgt_dict:12,tgt_examples_it:11,tgt_len:[10,12],tgt_pad:2,tgt_sent:13,tgt_seq_length:[3,11],tgt_seq_length_trunc:3,tgt_vocab:10,tgz:[6,20],than:[3,4,17],thang:18,thei:[2,4,12,17],them:[4,17],theorem:12,thi:[0,2,3,4,5,6,8,10,12,14,15,17,19,20],thin:10,thoma:2,thoroughli:12,three:12,through:[2,10],throughout:[6,20],thu:11,time:[10,15,20],timestep:13,titl:[3,8],tlen:12,todai:2,togeth:10,toi:[6,20],tok:2,token:[3,4,5,6,12,16,17,20],told:[4,17],too:2,tool:[0,1,4,5],toolkit:8,top:[6,12,20],torch:[2,12],torchaudio:20,torchtext:[2,10,11],torchvis:6,total:[3,10],trace:13,train:[1,2,4,5,6,7,8,10,14,20],train_it:[2,10],train_loss:10,train_src:[1,3,4,5,6,17,20],train_tgt:[1,3,4,5,6,17,20],trainabl:10,trainer:[2,4,7,9,17],tran:2,trans_batch:2,transfom:7,transform:[7,12,15,20],transformerdecod:12,transformerencod:12,transit:2,translat:[2,3,4,6,7,8,10,12,18,19,20],translate_batch:[2,13],translationbuild:[2,13],travi:0,tree:12,trick:[10,12],tripl:11,trivial:12,truck:2,trunc:14,trunc_siz:10,truncat:[3,10,11,14,15],ttention:18,tupl:[11,12],turn:3,tutori:8,two:[4,12,17],txt:[1,2,3,4,6,8,16,17,20],type:[7,10,11,12,14,16,20],typic:[3,10,15],u200b:2,underli:13,uniform:15,unit:[4,12,17,19],unittest:0,unk:[3,16],unknown:13,unlimit:11,unnorm:12,unzip:1,updat:[2,10,12,13,15],update_global_st:13,update_learning_r:10,url:[8,18],usag:1,use:[2,3,4,7,8,11,12,13,15,17,20],use_filter_pr:11,used:[3,4,6,10,12,15,17],useful:10,user:[10,12],userwarn:2,uses:[4,5,12,15],using:[1,3,8,11,12,13],usr:2,usual:[4,17],util:10,val:[2,3,4,5,6,10,17,20],val_stat:2,valid:[1,2,3,4,5,10,14,15,17],valid_data:2,valid_it:[2,10],valid_loss:10,valid_src:[1,3,4,5,6,17,20],valid_stat:10,valid_tgt:[1,3,4,5,6,17,20],valu:[1,3,11,12,15],varieti:6,variou:10,vaswanispujgkp17:12,vec:15,vector:[12,13,15],verbos:[1,3,4,5,6,16,17,20],veri:[1,3,19],version:[1,12],via:15,vinyal:[3,18],visionari:2,visual:6,vocab:[1,2,7,10,12,16],vocabulari:[1,2,10,14,16,19],wai:2,walk:13,want:2,warmup:15,warmup_step:[1,10],watson:2,weight:[12,15,16],weightnorm:12,well:[2,15],went:2,wget:[1,4,5,6,20],what:[2,6,10],when:[0,3,8,12,15],where:[12,15],wherea:15,whether:3,which:[2,3,4,12,15,17],whose:[4,11,17],width:15,window:[10,11,14,15,16,20],window_s:[11,12,20],window_strid:[11,20],without:[3,12,15],wmt16:[4,5],wmt16_files_mmt:[4,5],wmt17_files_mmt:[4,5],wmt:[4,5],wojciech:18,wolfgang:18,word:[1,2,3,11,12,13,14,15,16,19],word_padding_idx:[2,12],word_prob:13,word_vec_s:[1,3,12],word_vocab_s:12,wordlk:13,work:[4,6,8,11,15,17,20],workflow:8,wors:3,would:15,wrapper:[2,3,10,13],write:10,wrong:2,wsc:[13,18],www:[4,5,15],yanez:2,yang:18,year:8,yet:12,yield:[3,11],ylhsieh:1,yml:0,yonghui:18,yoon:8,yoshua:18,you:[2,4,6,7,8,12,15,17],your:[0,2],yourself:8,yuan:18,yuntian:8,zaremba:18,zero:12,zhifeng:18,zip:1,zxf:[6,20]},titles:["Contributors","FAQ","Library: Example","Example: Summarization","&lt;no title&gt;","Example: Translation","Example: Image to Text","&lt;no title&gt;","Overview","onmt","Doc: Framework","Doc: Data Loaders","Doc: Modules","Doc: Translation","Options: preprocess.py:","Options: train.py:","Options: translate.py:","Quickstart","References","&lt;no title&gt;","Example: Speech to Text"],titleterms:{"class":13,acknowledg:20,addit:8,altern:12,architectur:12,attent:[12,15],beam:[13,16],citat:8,cnndm:3,contributor:0,conv2conv:12,copi:12,core:12,data:[3,11,14,16,17],dataset:11,decod:[12,15],depend:[6,20],doc:[10,11,12,13],effici:16,embed:[1,15],encod:[12,15],evalu:3,exampl:[2,3,5,6,20],faq:1,featur:15,framework:10,gener:15,gigaword:3,glove:1,gpu:1,how:1,imag:6,infer:3,initi:15,instal:8,librari:2,loader:11,log:[14,15,16],loss:10,model:[1,10,15,16,17],modul:12,multi:1,onmt:9,optim:[10,15],option:[6,14,15,16,20],overview:8,preprocess:[3,14,17],pretrain:1,prune:14,quick:[6,20],quickstart:17,random:14,rate:15,refer:[3,18],resourc:8,search:13,speech:[14,15,16,20],sru:12,start:[6,20],step:17,structur:12,summar:3,support:1,text:[6,20],train:[3,15,17],trainer:10,transfom:12,transform:1,translat:[5,13,16,17],type:15,use:1,vocab:14,you:1}})