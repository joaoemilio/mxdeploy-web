package com.mxdeploy.rest;

import java.util.Collection;

import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

import com.mxdeploy.pojo.Component;

@Path("/component")
public class ComponentService {
	
	@GET
	@Produces("application/json")	
	public Collection<Component> getAll(){
		return null;
	}

}
