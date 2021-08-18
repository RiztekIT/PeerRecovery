import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { UtilService } from '../../services/util.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
/* import { File } from '@ionic-native/file/ngx'; */
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-resource-dir',
  templateUrl: './resource-dir.page.html',
  styleUrls: ['./resource-dir.page.scss'],
})
export class ResourceDirPage implements OnInit {

  pdf;

  constructor(
    private document: DocumentViewer,
    public utilSVC: UtilService,
    private fileOpener: FileOpener,
    private ft: FileTransfer,
    private file: File
    
  ) { }

  options: DocumentViewerOptions = {
    title: 'My PDF'
  }

  ngOnInit() {
    /* this.openPDF()   */  

  }

  openPDF(){
    this.utilSVC.getPDF().getDownloadURL().then(resp=>{
      console.log(resp);
      this.pdf = resp
  //    this.document.viewDocument(resp, 'application/pdf', this.options)

  const transfer =  this.ft.create()
  let path = this.file.dataDirectory

  

  transfer.download(resp, `${path}myfile.pdf`).then(resp=>{
    let url = resp.toURL()
    this.fileOpener.open(url, 'application/pdf')
  .then(() => console.log('File is opened'))
  })

  })


    
  }

  openPDF2(){
    this.utilSVC.getPDF().getDownloadURL().then(resp=>{

      let fakeName = Date.now()

      this.file.copyFile(resp,'resource-dir.pdf',this.file.dataDirectory,`${fakeName}.pdf`).then(result=>{
        this.fileOpener.showOpenWithDialog(result.nativeURL, 'application/pdf').then(() => console.log('File is opened'))
      })
      
     
    })
  }

}
