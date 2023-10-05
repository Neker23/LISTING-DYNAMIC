import { Component, OnInit } from '@angular/core';
import { TIMELINE_DATA } from './timeline-listing.data';
import { DatePerUser } from './timeline-listing.interface';

@Component({
  selector: 'app-timeline-listing',
  templateUrl: './timeline-listing.component.html',
  styleUrls: ['./timeline-listing.component.scss'],
})
export class TimelineListingComponent implements OnInit {

  private _data = TIMELINE_DATA;
  dateMap: DatePerUser[] = [];
  showItems = false;

  ngOnInit(): void {
    this.onOrder();
    this.onSeparete()
    this.onRender();
  }

  onOrder() {
    this._data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    console.log(this._data);
  }

  onSeparete() {
    this._data.forEach((dataElement) => {
      // index = this.dateMap.findIndex(
      //   (mapElement) => dataElement.date == mapElement['date']
      // );
      const item = this.dateMap.find(
        (mapElement) => dataElement.date == mapElement.date
      );
      if (item) {
        item.data.push(dataElement);
      } else {
        this.dateMap.push({ date: dataElement.date, data: [dataElement] });
      }
    });

    console.log(this.dateMap);
  }

  onRender() {
    this.showItems = !this.showItems;
  }
}
