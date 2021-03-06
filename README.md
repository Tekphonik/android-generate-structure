# Android Structure Generation

This script is used to generate a basic Activity-View-TouchListener structure for Android Custom View Projects in the current directory.

# *This project is currently undergoing major changes. README is NOT up to date.

## Installation

- `git clone https://github.com/Nitemaeric/android-generate-structure.git` to grab the script.
- `npm install` just incase the node modules are missing.

## Usage

**Be sure that you have changed into your desired directory**

Otherwise it will cause an error, as the script searches for com."organisation_name".... pattern.

\<path_to_script\> being where the project and "generate.js" file is saved.

\<desired_name\> being the name of the files you desire.

```
node <path_to_script> <desired_name>
```

```	
Current Directory
|-> Activity
|-> View
|-> TouchListener
```

### Aliasing

To simplify the usage of this script, assign it to a bash alias.

```
echo "alias and-gen-struct='node <path_to_script>'" >> ~/.bash_profile
```

and then use the script as

```
and-gen-struct <desired_name>
```

## Example

If you typed:

```
node /Users/username/Desktop/android-generate-structure/generate Unit
```

it would generate the following files in the current directory:

```
- UnitActivity.java
- UnitView.java
- UnitTouchListener.java
```
	
## Generated File Template

### Activity

```
TODO
```

### View

```
TODO
```

### TouchListener

```
TODO
```