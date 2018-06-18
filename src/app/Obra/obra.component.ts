import {Component, OnInit, ViewChild} from '@angular/core';
import {Obra} from './obra';
import {ObraService} from './obra.service';
import {Cliente} from '../cliente/cliente';
import {Fornecedor} from '../fornecedor/fornecedor';
import {CentroCusto} from '../CentroCusto/centroCusto';
import {ClienteService} from '../cliente/cliente.service';
import {FornecedorService} from '../fornecedor/fornecedor.service';
import {CentroCustoService} from '../CentroCusto/centroCusto.service';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { } from '@types/googlemaps';
import {Cidade} from '../Cidade/cidade';
import {CidadeService} from '../Cidade/cidade.service';

@Component({
  templateUrl: './obra.component.html',
  styleUrls: ['./obra.component.css']
})
export class ObraComponent implements OnInit {

  obras: Obra[];
  latitude: number;
  longitude: number;
  public options: any;
  private chart2: AmChart;
  private chart3: AmChart;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  clientes: Cliente[];
  cidades: Cidade[];
  fornecedores: Fornecedor[];
  centroCustos: CentroCusto[];
  showDialog = false;
  obraEdit = new Obra();

  makeRandomDataProvider() {
    const dataProvider = [];

    // Generate random data
    for (let year = 1950; year <= 2005; ++year) {
      dataProvider.push({
        year: '' + year,
        value: Math.floor(Math.random() * 100) - 50
      });
    }

    return dataProvider;
  }

  constructor(private obraService: ObraService, private clienteService: ClienteService, private fornecedorService: FornecedorService,
              private centroCustoService: CentroCustoService, private AmCharts: AmChartsService, private cidadeService: CidadeService) {
  }


  ngOnInit(): void {
    console.log(this.obras);
    this.obraService.findAll().subscribe(e => {
      this.obras = e;
      this.chart2 = this.AmCharts.makeChart('chartdiv2', this.makeOptions(e));
    });
    console.log(this.obras);

    // Testando o Google Maps
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.clienteService.findAll().subscribe(e => this.clientes = e);
    this.fornecedorService.findAll().subscribe(e => this.fornecedores = e);
    this.centroCustoService.findAll().subscribe(e => this.centroCustos = e);
    this.cidadeService.findAll().subscribe(e => this.cidades = e);

    this.options = this.makeOptions(this.obras);

  }
// parei adicioando o amChart, faltava o OnInit https://github.com/amcharts/amcharts3-angular2
  makeOptions(e) {
    return {
      'type': 'serial',
      'theme': 'dark',
      'marginTop': 0,
      'marginRight': 80,
      'dataProvider': e,
      'valueAxes': [{
        'axisAlpha': 0,
        'position': 'left',
        'title': 'Valor R$'
      }],
      'graphs': [{
        'balloonText': '<b>[[category]]: [[value]]</b>',
        'fillColorsField': 'color',
        'fillAlphas': 0.9,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'custoTotal'
      }],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'chartScrollbar': {
        'graph': 'g1',
        'gridAlpha': 0,
        'color': '#888888',
        'scrollbarHeight': 55,
        'backgroundAlpha': 0,
        'selectedBackgroundAlpha': 0.1,
        'selectedBackgroundColor': '#888888',
        'graphFillAlpha': 0,
        'autoGridCount': true,
        'selectedGraphFillAlpha': 0,
        'graphLineAlpha': 0.2,
        'graphLineColor': '#c2c2c2',
        'selectedGraphLineColor': '#888888',
        'selectedGraphLineAlpha': 1
      },
      'export': {
        'enabled': true
      },
      'dataDateFormat': 'YYYY-MM-DD',
      'categoryField': 'descricao',
      'categoryAxis': {
        'gridPosition': 'start',
        'labelRotation': 45
      },
    };
  }
  findAll() {
    this.obraService.findAll().subscribe(e => this.obras = e);
    console.log(this.obras);
  }

  setCenter(e:any, cidades){
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(cidades[0].latitude, cidades[0].longitude));
  }

  novo() {
    this.showDialog = true;
    this.obraEdit = new Obra();
  }

  salvar() {
    this.obraService.save(this.obraEdit).subscribe(e => {
      this.obraEdit = new Obra();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(obra: Obra) {
    this.obraEdit = obra;
    this.showDialog = true;
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  remover(obra: Obra) {
    this.obraService.delete(obra.id).subscribe(() => {
      this.findAll();
    });
  }
}
