<template>
  <div class="custom-select" :class="{ active: isActive }" ref="customSelect">
    <button 
      role="button" 
      class="select-button" 
      @click="toggleSelect" 
      @keydown="onKeyDown" 
      :aria-expanded="isActive.toString()" 
      :aria-label="selected ? selected : placeholderText" 
      tabindex="0">
      {{ selected || placeholderText }}
      <span class="arrow-down"></span>
    </button>
    <ul class="select-dropdown" ref="dropdown" role="listbox">
      <li 
        class="region" 
        v-for="(option, index) in options" 
        :key="index" 
        @click="selectOption(option)" 
        @keyup.enter="selectOption(option)" 
        @keydown.arrow-up.prevent="arrowUp(index)" 
        @keydown.arrow-down.prevent="arrowDown(index)" 
        :class="{ ignoreDesk: index === 0 || index === 5 || index === 6, active: selectedIndex === index }" 
        tabindex="0" 
        role="option" 
        :aria-selected="selectedIndex === index.toString()">
        {{ option }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Country'
    }
  },
  data() {
    return {
      isActive: false,
      selected: '',
      selectedIndex: -1
    };
  },
  computed: {
    placeholderText() {
      return this.selected || this.placeholder;
    }
  },
  mounted() {
    // Add event listener to detect clicks outside the dropdown
    document.body.addEventListener('click', this.onClickOutside);
  },
  beforeDestroy() {
    // Remove event listener when component is destroyed
    document.body.removeEventListener('click', this.onClickOutside);
  },
  methods: {
    toggleSelect() {
      this.isActive = !this.isActive;
    },
    selectOption(option) {
      this.selected = option;
      this.isActive = false;
      this.$emit('input', option); // Emit the input event for v-model
      this.$emit('change', option); // Emit the change event
    },
    arrowUp(index) {
      if (index > 0) {
        this.selectedIndex = index - 1;
        this.$refs.dropdown.children[this.selectedIndex].focus();
      }
    },
    arrowDown(index) {
      if (index < this.options.length - 1) {
        this.selectedIndex = index + 1;
        this.$refs.dropdown.children[this.selectedIndex].focus();
      }
    },
    onClickOutside(event) {
      // Check if the click occurred outside the custom select component
      if (this.$refs.customSelect && !this.$refs.customSelect.contains(event.target)) {
        // Close the dropdown
        this.isActive = false;
      }
    },
    onKeyDown(event) {
      if (event.key === 'Tab') {
        this.isActive = true;
        if (this.$refs.dropdown.children[0]) {
          this.$refs.dropdown.children[0].focus();
        }
      }
    }
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
}

.select-button {
  padding: 5px 10px 0px 10px;
    background-color: #fff;
    border: 0px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    font-size: 16px;
    text-transform: capitalize;
    color: #292929;
    /*font-weight: 500;*/
}

.sort-by li:first-child {
  opacity: 50%;
  pointer-events: none;
}

.custom-select button.select-button span.arrow-down {
  position: absolute;
  right: 15px;
  top: 36%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  -webkit-transform: rotate(45deg);
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
}

.custom-select.active button.select-button span.arrow-down {
  position: absolute;
  right: 15px;
  top: 57%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  -webkit-transform: rotate(225deg);
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
}

.select-dropdown {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 0px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  width: 100%;
  margin-top: 22px;
  z-index: 1;
  max-height: 275px;
  overflow-y: auto;
  box-shadow: 0px 0px 4px 0px #BEBCBC73;
}

.custom-select.active .select-dropdown {
  display: block;
}

.select-dropdown li {
  padding: 12px 10px;
  cursor: pointer;
}

.select-dropdown li:hover {
  background-color: #F1F7FD;
}

.select-dropdown li.active {
  background-color: #F1F7FD;
  color: #fff;
}

.select-dropdown li.active:hover {
  background-color: #F1F7FD;
}
</style>
