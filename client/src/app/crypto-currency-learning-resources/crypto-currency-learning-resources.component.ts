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
  resourceTypes: string[] = ['All', 'Article', 'Book', 'Course'];
  learningResources: any[] = [];
  filteredResources: any[] = [];

  constructor(private learningResourceService: LearningResourceService) {}

  ngOnInit() {
    this.fetchLearningResources();
    this.filterResources();
  }

  onResourceTypeChange() {
    this.filterResources();
  }

  onSearch() {
    if (this.searchTerm) {
      this.filteredResources = this.learningResources.filter(
        (resource) =>
          resource.title
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
          resource.content.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredResources = [...this.learningResources];
    }
  }

  fetchLearningResources() {
    this.learningResourceService
      .getLearningResources()
      .subscribe((resources: any[]) => {
        this.learningResources = resources;
        this.filterResources();
      });
  }

  filterResources() {
    if (this.selectedResourceType === 'All') {
      this.filteredResources = this.learningResources;
    } else {
      this.filteredResources = this.learningResources.filter(
        (resource) => resource.type === this.selectedResourceType
      );
    }
  }
}
