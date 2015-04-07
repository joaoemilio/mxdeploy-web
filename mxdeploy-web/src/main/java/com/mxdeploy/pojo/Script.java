package com.mxdeploy.pojo;

import java.util.Collection;

public class Script {

	private String name;
	private String lang;
	private Collection<VersionScript> versionScriptList;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	public Collection<VersionScript> getVersionScriptList() {
		return versionScriptList;
	}
	public void setVersionScriptList(Collection<VersionScript> versionScriptList) {
		this.versionScriptList = versionScriptList;
	}
	
}
