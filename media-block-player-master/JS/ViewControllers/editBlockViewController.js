// Class for editing one scriptFile block for syncFile editor.
// Enetered from syncFileEditor and will exit back to syncFileEditor.
class EditBlockViewController extends ViewController {

    constructor() {
        super();

        this.syncFileEditorData;
        this.clickedMerge = false;
    }

    renderHtml(html) {
        const htmlView = `
            <section id="FilesPickerViewController" class="container">
				<div class = "myMERGE">
					<h2>Edit, Split or Merge block</h2>
				</div>
				<div class = "myMERGE">
					<textarea id="actual-text">
					</textarea>
				</div>
				<div class = "myMERGE">
					<h6>Edit text or add "|" to Split into two blocks or<a id="merge" class="btn m-lr-10">Merge with the next block</a></h6>
				</div>
				<div class = "myMERGE">
					<a id="apply" class="btn m-lr-10">Apply edited changes to the Script</a>
					<a id="cancel" class="btn m-lr-10">Cancel</a>
				</div>
				
				<div class="row">
                    <div class="col s12">
                        <a class="btn-small right modal-trigger" href="#helpmodal">Help</a>
                    </div>
                    <div id="helpmodal" class="modal">
                        <div class="modal-content">
                            <h4>Edit, Split or Merge block</h4>
                            <p>
							In the editable text field you see the current block. You may either:
-- edit text (e.g. correct a typo)
-- split block into two by typing one pipeline '|' onto proper position
-- [MERGE WITH THE NEXT BLOCK] (i.e. respective '|' will be removed)
After editing hit button [APPLY EDITED CHANGES TO THE SCRIPT] - you will be moved back to page "Edit block time-marks".
You may also ignore changes by hitting [CANCEL].

							</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                </div>
				
            </section>
        `;
        super.renderHtml(htmlView);
    }

    setupProperties() {
        this.merge = $('#merge');
        this.apply = $('#apply');
        this.cancel = $('#cancel');
        this.actualText = $('#actual-text');
    }

    setupEventListeners() {
        this.mergeButtonClicked = this.mergeButtonClicked.bind(this);
        this.applyButtonClicked = this.applyButtonClicked.bind(this);
        this.cancelButtonClicked = this.cancelButtonClicked.bind(this);

        this.merge.on('click', this.mergeButtonClicked);
        this.apply.on('click', this.applyButtonClicked);
        this.cancel.on('click', this.cancelButtonClicked);

    }
	
	viewDidLoad() {
        this.actualText.val(this.syncFileEditorData.getTextOfSelectedBlock());
		var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);		
    }

    presentNextController() {
        const syncFileEditViewController = new SyncFileEditViewController();

        syncFileEditViewController.syncFileEditorData = this.syncFileEditorData;
		syncFileEditViewController.setTimes();

        this.navigationController.present(syncFileEditViewController);
		
    }

    // Private Methods

    mergeButtonClicked() { 
		if(!this.clickedMerge){ //mergnut moze iba 1x, preto sa button nastavi na disabled
			try {
				var nextBlock = ' '.concat(this.syncFileEditorData.mergeIsPossible()); //mergeIsPossible vracia text nasledujuceho bloku ak je merge mozny
				this.clickedMerge = true;
				this.actualText.val(this.actualText.val() + nextBlock);
			}
			catch(error) {
				console.error(error);
				alert(error);
			}
		}
    }

    applyButtonClicked() {
        try {
            if (this.clickedMerge) {
                this.syncFileEditorData.mergeSelectedBlockWithNextBlock();
            }

            var splitTextList = this.actualText.val().split("|");
            var countOfPipelines = splitTextList.length - 1;

            if (countOfPipelines == 1) {
                var text1 = splitTextList[0].trim();
                var text2 = splitTextList[1].trim();

                if (text1.length > 0 && text2.length > 0) {
                    this.syncFileEditorData.splitSelectedBlock(splitTextList[0].trim(), splitTextList[1].trim());
                }
                else {
                    throw "You have empty block.";
                }
            }
            else if (countOfPipelines == 0) {
                if (this.actualText.val().trim().length == 0) {
                    throw "You have empty block.";
                }
                this.syncFileEditorData.setTextOfSelectedBlock(this.actualText.val().trim());
            }
            else {
				throw "You have multiple pipelines.";
            }
            this.presentNextController();
        }
        catch (error) {
            console.error(error);
            alert(error);
        }

    }

    cancelButtonClicked() {
        try {
            this.presentNextController();
        }
        catch (error) {
            console.error(error);
            alert(error);
        }

    }

}
