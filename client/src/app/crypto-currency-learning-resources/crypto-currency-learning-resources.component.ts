import { Component, OnInit } from '@angular/core';
import { LearningResourceService } from '../crypto-learning-resource.service';

@Component({
  selector: 'app-crypto-currency-learning-resources',
  templateUrl: './crypto-currency-learning-resources.component.html',
  styleUrls: ['./crypto-currency-learning-resources.component.css'],
})
export class CryptoCurrencyLearningResourcesComponent implements OnInit {
  // Variables for search, filter options, resources list, and pagination go here
  searchTerm: string = '';
  selectedResourceType: string = '';
  resourceTypes: string[] = ['All', 'Video', 'Article', 'Book'];
  learningResources: any[] = [];

  constructor(private learningResourceService: LearningResourceService) {}

  ngOnInit() {
    this.fetchLearningResources();
  }

  fetchLearningResources() {
    this.learningResourceService
      .getLearningResources()
      .subscribe((resources: any[]) => {
        this.learningResources = resources;
      });
  }
}
